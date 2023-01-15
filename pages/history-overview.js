import { PageHeader } from "antd";
import UserOrders from "components/logged-in/UserOrders";
import UserTrades from "components/logged-in/UserTrades";
import LoggedInLayout from "layouts/logged-in/MainLayout";
import { Panel, Container } from "layouts/Panel";
import SymbolSelector from "components/logged-in/SymbolSelector";
import useSymbol from "utils/useSymbol";

export default function HistoryOverview({ symbols }) {
    const { symbol, setSymbol } = useSymbol(symbols);

    return (
        <LoggedInLayout>
            <Panel style={{ height: "auto" }}>
                <Container ratio={8}>
                    hi
                </Container>
                <Container ratio={2} style={{ margin: "auto", borderLeft: "none" }}>
                    <SymbolSelector handler={ symbolHandler } symbols={ symbols } />
                </Container>
            </Panel>
            <PageHeader title="Order History" />
            <Panel>
                <UserOrders />
            </Panel>
            <PageHeader title="Trade History" />
            <Panel>
                <UserTrades />
            </Panel>
        </LoggedInLayout>
    )
}