import { useQuery } from '@apollo/client';
import { GET_USER_ASSET } from 'gql/queries';
import LoggedInLayout from "layouts/logged-in/MainLayout";
import { Typography } from 'antd';
import UserAssets from 'components/logged-in/UserAssets';
import _ from 'lodash';
const { Title } = Typography;

const a = Array(50).fill().map((_, index) => ({
    key: index,
    asset: index,
    free: index,
    locked: index,
    freeze: index,
    withdrawing: index,
    btcValuation: index
}))

export default function AssetsOverview() {
    const { loading, error, data, refetch } = useQuery(GET_USER_ASSET, {
        fetchPolicy: "network-only"
    });

    return (
        <LoggedInLayout>
            <div>
            <Title level={2} style={{ paddingLeft: "10px" }}>Overview on Assets</Title>
            <UserAssets assets={ loading || _.isEmpty(data)? []: data.userAssets } />
            </div>
        </LoggedInLayout>
    )
}