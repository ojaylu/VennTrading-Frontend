import { Tabs, Radio, Space, message } from 'antd';
import Form from 'components/Form';
import FormTextInput from 'components/FormTextInput';
import { useEffect, useState } from 'react';
import binder from 'utils/binder';
import { POST_LIMIT, POST_MARKET } from 'gql/mutations';
import * as yup from "yup";
import { useMutation } from '@apollo/client';
import { FormInput } from 'components/FormInput';

const {Group: RGroup, Button: RButton} = Radio;

function Container({ children }) {
    return (
        <Space
            align="center"
            direction="vertical"
            style={{ width: "100%", margin: "5px" }}
        >{ children }
        </Space>
    )
}

function Limit({ symbol }) {
    const defaults = {
        side: "BUY",
        timeInForce: "GTC"
    }
    const [order, setOrder] = useState({ symbol, ...defaults });
    const schema = yup.object({
        price: yup.number().positive().required(),
        quantity: yup.number().positive().required(),
    }).required();

    const [submitLimit] = useMutation(POST_LIMIT);

    const submitHandler = (data) => {
        submitLimit({ variables: {...order, ...data}, fetchPolicy: "network-only" })
            .then(res => message.success("Limit order submitted"))
            .catch(e => {
                message.error(JSON.stringify(e))
            });
        }

    return (
        <Container>
            <Form schema={ schema } submitHandler={ submitHandler } left={9}
                nonTxt={
                    [
                        <FormInput component={
                            <RGroup onChange={binder(setOrder, "side")} defaultValue={defaults.side}>
                                <RButton value="BUY">BUY</RButton>
                                <RButton value="SELL">SELL</RButton>
                            </RGroup>
                        } label="Side" required/>,
                        <FormInput component={
                            <RGroup onChange={binder(setOrder, "timeInForce")} defaultValue={defaults.timeInForce}>
                                <RButton value="GTC">GTC</RButton>
                                <RButton value="IOC">IOC</RButton>
                                <RButton value="FOK">FOK</RButton>
                            </RGroup>
                        } label="Time in force" required />
                    ]
                }
            >
                <FormTextInput label="Quantity" name="quantity" required />
                <FormTextInput label="Price" name="price" required />
            </Form>
        </Container>
    );
}

function Market({ symbol }) {
    const defaults = {
        side: "BUY",
    }
    const [order, setOrder] = useState({ symbol, ...defaults });
    const schema = yup.object({
        quantity: yup.number().positive().required(),
    }).required();

    const [submitLimit] = useMutation(POST_MARKET);

    const submitHandler = (data) => {
        submitLimit({ variables: {...order, ...data}, fetchPolicy: "network-only" })
            .then(res => message.success("Market order submitted"))
            .catch(e => {
                message.error(JSON.stringify(e))
            });
        }

    return (
        <Container>
            <Form schema={ schema } submitHandler={ submitHandler } left={9}
                nonTxt={
                    [
                        <FormInput component={
                            <RGroup onChange={binder(setOrder, "side")} defaultValue={defaults.side}>
                                <RButton value="BUY">BUY</RButton>
                                <RButton value="SELL">SELL</RButton>
                            </RGroup>
                        } label="Side" required/>,
                    ]
                }
            >
                <FormTextInput label="Quantity" name="quantity" required />
            </Form>
        </Container>
    );
}

function Filter({ title, filter }) {
 return (
    <>
        <b>{title}</b><br />
        {Object.keys(filter).map((key, index) => <div key={index}>{key}: {filter[key]}</div>)
        }
    </>
 )
}

function Filters({ filters }) {
    return (
        <div>
            {filters.PRICE_FILTER && <Filter title="Price Filter" filter={filters.PRICE_FILTER} />}
            {filters.LOT_SIZE && <Filter title="Quantity Filter" filter={filters.LOT_SIZE} />}
            {filters.MARKET_LOT_SIZE && <Filter title="Market Quantity Filter" filter={filters.MARKET_LOT_SIZE} />}
            {filters.MIN_NOTIONAL && <Filter title="Minimum Notional" filter={filters.MIN_NOTIONAL} />}
        </div>
    )
}

export default function MakeOrder({ symbol, permissions, filters }) {
    const [orderTypes, setOrderTypes] = useState([]);

    useEffect(() => {
        const items = [];
        if (permissions.includes("LIMIT")) {
            items.push({
                label: "Limit",
                key: "limit",
                children: <Limit symbol={ symbol } />
            });
        }
        if (permissions.includes("MARKET")) {
            items.push({
                label: "Market",
                key: "market",
                children: <Market symbol={ symbol } />
            });
        }

        setOrderTypes(items);
    }, [permissions]);

    return (
        <div style={{height: "100%", overflowY: "scroll"}}>
            <Tabs
                defaultActiveKey={ orderTypes[0]?.key }
                centered
                items={ orderTypes }
            />
            <Container>
                <Filters filters={ filters } />
            </Container>
        </div>
    );
};