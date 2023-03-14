import { Table } from "antd";

const columns = [
    {
        title: "Asset",
        dataIndex: "asset"
    },
    {
        title: "Free",
        dataIndex: "free"
    },
    {
        title: "Locked",
        dataIndex: "locked"
    },
    {
        title: "Freeze",
        dataIndex: "freeze"
    },
    {
        title: "Withdrawing",
        dataIndex: "withdrawing"
    },
    {
        title: "IPOable",
        dataIndex: "ipoable"
    },
    {
        title: "Total",
        dataIndex: "total"
    },
    {
        title: "Btc Valuation",
        dataIndex: "btcValuation"
    },
];

export default function UserAssets({ className, loading, data }) {

    console.log("data:", data)

    return (
        <Table 
            columns={ columns }
            rowKey="asset"
            loading={ loading }
            dataSource={ data }
            style={{
                width: "100%"
            }}
            scroll={{
                x: "100%"
            }}
            pagination={{
                hideOnSinglePage: true
            }}
            className={className}
        />
    )
}