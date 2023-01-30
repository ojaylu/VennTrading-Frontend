import LoggedInLayout from "layouts/logged-in/MainLayout";
import { PageHeader } from 'antd';
import UserAssets from 'components/logged-in/UserAssets';
import useSymbol from "utils/useSymbol";
import _ from 'lodash';
import styles from "public/styles/main_layout.module.scss";

export default function AssetsOverview({ symbols }) {
    const { symbol, setSymbol, loading } = useSymbol(symbols);
    
    return (
        loading ||
        <LoggedInLayout>
            <PageHeader title="Overview on Assets" className={styles.panel} />
            <UserAssets className={styles.panel} />
        </LoggedInLayout>
    )
}