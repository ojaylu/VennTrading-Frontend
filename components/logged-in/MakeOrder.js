import { Tabs, Radio, Space, message } from 'antd';
import Form from 'components/Form';
import FormInput from 'components/FormInput';
import { useEffect, useState } from 'react';
import binder from 'utils/binder';
import { POST_LIMIT, POST_MARKET } from 'gql/mutations';
import * as yup from "yup";
import { useMutation } from '@apollo/client';

const {Group: RGroup, Button: RButton} = Radio;

function Container({ children }) {
    return (
        <Space
            align="center"
            direction="vertical"
            style={{ width: "100%", margin: "5px"}}
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

    const [submitLimit, {data, called, error}] = useMutation(POST_LIMIT);

    const submitHandler = (data) => {
        submitLimit({ variables: {...order, ...data}, fetchPolicy: "network-only" })
            .then(res => message.success("Limit order submitted"))
            .catch(e => {
                message.error(JSON.stringify(e))
            });
        }

    if (data) {
        const orderDetails = data.limitOrder;
        message.success("data", orderDetails.transactionTime);
    }

    return (
        <Container>
            <RGroup onChange={binder(setOrder, "side")} defaultValue={defaults.side}>
                <RButton value="BUY">BUY</RButton>
                <RButton value="SELL">SELL</RButton>
            </RGroup>
            <RGroup onChange={binder(setOrder, "timeInForce")} defaultValue={defaults.timeInForce}>
                <RButton value="GTC">GTC</RButton>
                <RButton value="IOC">IOC</RButton>
                <RButton value="FOK">FOK</RButton>
            </RGroup>
            <Form schema={ schema } submitHandler={ submitHandler }>
                <FormInput label="Quantity" name="quantity" required />
                <FormInput label="Price" name="price" required />
            </Form>
        </Container>
    );
}

function Market() {
    return (
        <div>market</div>
    );
}

export default function MakeOrder({ symbol, permissions }) {
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
        <Tabs
            defaultActiveKey={ orderTypes[0]?.key }
            centered
            items={ orderTypes }
            style={{
                border: "solid green",
                height: "100%"
            }}
        />
    );
};