import { GET_USER_TRADES } from "gql/queries";
import { useQuery } from "@apollo/client";
import { Table } from "antd";
import { useEffect } from "react";

export default function UserTrades({ symbol, pollingInterval=5000 }) {
    const { data, loading, startPolling, stopPolling } = useQuery(GET_USER_TRADES, {
        variables: {symbol},
        fetchPolicy: "network-only"
    });

    useEffect(() => {
        startPolling(5000);
        return () => {
            stopPolling();
        };  
    }, [symbol]);

    const columns = [
        {
            title: "Order ID",
            dataIndex: "orderId"
        },
        {
            title: "Price",
            dataIndex: "price"
        },
        {
            title: "Quantity",
            dataIndex: "qty"
        },
        {
            title: "Commission",
            dataIndex: "commission"
        },
        {
            title: "Commission Asset",
            dataIndex: "commissionAsset"
        },
        {
            title: "Time",
            dataIndex: "time",
            render: time => new Date(time).toLocaleString('en-GB')
        },
        {
            title: "Side",
            dataIndex: "isBuyer",
            render: bool => bool? "BUY": "SELL"
        },
        {
            title: "Is Maker",
            dataIndex: "isMaker",
            render: bool => JSON.stringify(bool)
        }
    ];

    return (
        <Table
            columns={ columns }
            dataSource={ data?.userTradeRecord }
            rowKey="id"
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