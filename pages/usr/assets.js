import LoggedInLayout from "layouts/logged-in/MainLayout";
import { PageHeader } from 'antd';
import UserAssets from 'components/logged-in/UserAssets';
import useSymbol from "utils/useSymbol";
import _ from 'lodash';

export default function AssetsOverview({ symbols }) {
    const { symbol, setSymbol } = useSymbol(symbols);

    return (
        <LoggedInLayout>
            <PageHeader title="Overview on Assets" />
            <UserAssets />
        </LoggedInLayout>
    )
}