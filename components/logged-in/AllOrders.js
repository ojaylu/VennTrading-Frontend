import { useQuery } from '@apollo/client';
import { GET_ALL_ORDERS } from 'gql/queries';
import { useEffect } from 'react';
import { Table } from 'antd';

export default function AllOrders({ symbol, pollingInterval = 500 }) {
    const { error, data: orders, startPolling, stopPolling, loading } = useQuery(GET_ALL_ORDERS, {
        variables: {symbol: symbol},
        fetchPolicy: "network-only"
    });

    // useEffect(() => {
    //     startPolling(pollingInterval);
    //     return () => {
    //         stopPolling();
    //     };
    // }, [symbol]);

    console.log("orders:", orders)

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
        <Table 
            columns={ columns } 
            dataSource={ orders?.orderRecord.map((order, index) => ({...order, key: index})) } 
            loading={ loading }
            scroll={{
                x: "100%"
            }}
            pagination={false}
            title={() => <b>Order History</b>}
        />
    )
}