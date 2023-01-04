import { useQuery } from '@apollo/client';
import { GET_ALL_ORDERS } from 'gql/queries';
import { useEffect } from 'react';
import { Table } from 'antd';

export default function AllOrders({ symbol, pollingInterval = 500 }) {
    const { error, data, startPolling, stopPolling } = useQuery(GET_ALL_ORDERS, {
        variables: {symbol: symbol},
        fetchPolicy: "network-only"
    });

    // useEffect(() => {
    //     startPolling(pollingInterval);
    //     return () => {
    //         stopPolling();
    //     };
    // }, [symbol]);

    console.log(data);
    const columns =[
        {
            title: "Price",
            dataIndex: "price"
        },
        {
            title: "Original Quantity",
            dataIndex: "origQty"
        },
        {
            title: "Executed Quantity",
            dataIndex: "executedQty"
        },
        {
            title: "Type",
            dataIndex: "type"
        },
        {
            title: "Side",
            dataIndex: "side"
        },
        {
            title: "Time",
            dataIndex: "time"
        }
    ]

    return (
        <Table columns={ columns } />
    )
}