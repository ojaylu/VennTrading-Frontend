import { useQuery } from '@apollo/client';
import { GET_ALL_ORDERS } from 'gql/queries';
import { useEffect } from 'react';
import { Table } from 'antd';

export default function UserOrders({ symbol, pollingInterval = 5000, pagination }) {
    const { error, data: orders, startPolling, stopPolling, loading } = useQuery(GET_ALL_ORDERS, {
        variables: { symbol },
        fetchPolicy: "network-only"
    });

    useEffect(() => {
        startPolling(pollingInterval);
        return () => {
            stopPolling();
        };
    }, [symbol]);

    console.log("orders:", orders)

    const columns =[
        {
            title: "Order ID",
            dataIndex: "orderId"
        },
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
            dataIndex: "time",
            render: time => new Date(time).toLocaleString('en-GB')
        }
    ]

    return (
        <Table 
            columns={ columns } 
            dataSource={ orders?.orderRecord} 
            rowKey="orderId"
            loading={ loading }
            style={{
                width: "100%"
            }}
            scroll={{
                x: "100%"
            }}
            pagination={{
                hideOnSinglePage: true
            }}
        />
    )
}