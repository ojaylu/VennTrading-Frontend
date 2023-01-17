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
            <PageHeader title="Order History" />
            <Panel style={{overflowY: "scroll"}}>
                <UserOrders />
            </Panel>
            <PageHeader title="Trade History" />
            <Panel style={{overflowY: "scroll"}}>
                <UserTrades />
            </Panel>
        </LoggedInLayout>
    )
}