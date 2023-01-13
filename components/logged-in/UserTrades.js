import { GET_USER_TRADES } from "gql/queries";
import { useQuery } from "@apollo/client";
import { Table } from "antd";

export default function UserTrades({ symbol }) {
    const { data, loading } = useQuery(GET_USER_TRADES, {
        variables: {symbol},
        fetchPolicy: "network-only"
    });

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
            scroll={{
                x: "100%"
            }}
            pagination={false}
        />
    )
}