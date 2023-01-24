import { Tabs, Radio, message } from 'antd';
import Form from 'components/Form';
import FormTextInput from 'components/FormTextInput';
import { useEffect, useState } from 'react';
import binder from 'utils/binder';
import { POST_LIMIT, POST_MARKET } from 'gql/mutations';
import * as yup from "yup";
import { useMutation } from '@apollo/client';
import { FormInput } from 'components/FormInput';
import ColContainer from 'components/ColContainer';

const {Group: RGroup, Button: RButton} = Radio;

function Limit({ symbol }) {
    const defaults = {
        side: "BUY",
        timeInForce: "GTC"
    }
    const [order, setOrder] = useState(defaults);
    const schema = yup.object({
        price: yup.number().positive().required(),
        quantity: yup.number().positive().required(),
    }).required();

    const [submitLimit] = useMutation(POST_LIMIT);

    const submitHandler = (data) => {
        console.log(order, data);
        submitLimit({ variables: {symbol, ...order, ...data}, fetchPolicy: "network-only" })
            .then(res => message.success("Limit order submitted"))
            .catch(e => {
                message.error(JSON.stringify(e))
            });
        }

    return (
        <ColContainer key="limit">
            <Form schema={ schema } submitHandler={ submitHandler } left={9} style={{height: "100%", overflow: "scroll"}}
                nonTxt={
                    [
                        <FormInput component={
                            <RGroup onChange={binder(setOrder, "side")} defaultValue={defaults.side}>
                                <RButton value="BUY">BUY</RButton>
                                <RButton value="SELL">SELL</RButton>
                            </RGroup>
                        } label="Side" required key="1" />,
                        <FormInput component={
                            <RGroup onChange={binder(setOrder, "timeInForce")} defaultValue={defaults.timeInForce}>
                                <RButton value="GTC">GTC</RButton>
                                <RButton value="IOC">IOC</RButton>
                                <RButton value="FOK">FOK</RButton>
                            </RGroup>
                        } label="Time in force" required key="2" />
                    ]
                }
            >
                <FormTextInput label="Quantity" name="quantity" required />
                <FormTextInput label="Price" name="price" required />
            </Form>
        </ColContainer>
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
        <ColContainer key="market">
            <Form schema={ schema } submitHandler={ submitHandler } left={9} style={{overflow: "scroll", height: "100%"}}
                nonTxt={
                    [
                        <FormInput component={
                            <RGroup onChange={binder(setOrder, "side")} defaultValue={defaults.side}>
                                <RButton value="BUY">BUY</RButton>
                                <RButton value="SELL">SELL</RButton>
                            </RGroup>
                        } label="Side" required key="1"/>,
                    ]
                }
            >
                <FormTextInput label="Quantity" name="quantity" required />
            </Form>
        </ColContainer>
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
            style={{overflow: "scroll"}}
        />
    );
};