import { PageHeader } from "antd";
import UserOrders from "components/logged-in/UserOrders";
import UserTrades from "components/logged-in/UserTrades";
import LoggedInLayout from "layouts/logged-in/MainLayout";
import { Panel, Container } from "layouts/Panel";
import SymbolSelector from "components/logged-in/SymbolSelector";
import useSymbol from "utils/useSymbol";
import styles from "public/styles/main_layout.module.scss";

export default function HistoryOverview({ symbols }) {
    // const { symbol, setSymbol, laoding } = useSymbol(symbols);

    return (
        <LoggedInLayout>
            <Panel style={{ height: "auto" }}>
                <Container ratio={8} style={{ borderRight: "none" }}>
                    <PageHeader title="Order History" />
                </Container>
                <Container ratio={2} style={{ margin: "auto" }}>
                    <SymbolSelector handler={ setSymbol } symbols={ symbols } />
                </Container>
            </Panel>
            <Panel style={{overflowY: "scroll"}}>
                <UserOrders symbol={symbol} />
            </Panel>
            <PageHeader title="Trade History" className={styles.panel} />
            <Panel style={{overflowY: "scroll"}}>
                <UserTrades symbol={symbol} />
            </Panel>
        </LoggedInLayout>
    )
}