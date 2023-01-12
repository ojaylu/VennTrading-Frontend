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
        title: "Btc Valuation",
        dataIndex: "btcValuation"
    },
];

export default function UserAssets({ assets }) {
    return (
        <Table 
            columns={ columns }
            dataSource={ assets.map((asset, index) => ({...asset, key: index})) }
            scroll={{
                x: "100%"
            }}
            pagination={{
                hideOnSinglePage: true
            }}
        />
    )
}