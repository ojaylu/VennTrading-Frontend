import LoggedInLayout from "layouts/logged-in/MainLayout";
import { PageHeader } from 'antd';
import UserAssets from 'components/logged-in/UserAssets';
import _ from 'lodash';

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
    return (
        <LoggedInLayout>
            <PageHeader title="Overview on Assets" />
            <UserAssets />
        </LoggedInLayout>
    )
}