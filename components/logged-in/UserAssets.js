import { Table } from "antd";
import { useQuery } from '@apollo/client';
import { GET_USER_ASSET } from 'gql/queries';

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

export default function UserAssets({ className }) {
    const { loading, error, data, refetch } = useQuery(GET_USER_ASSET, {
        fetchPolicy: "network-only"
    });

    return (
        <Table 
            columns={ columns }
            rowKey="asset"
            loading={ loading }
            dataSource={ data?.userAssets }
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