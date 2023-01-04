import LoggedInLayout from "layouts/logged-in/MainLayout";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { useState, useEffect } from "react";
import OrderBook from "components/logged-in/OrderBook";
import RecentTrades from "components/logged-in/RecentTrades";
import { Panel, Container } from "layouts/Panel";
import AllOrders from "components/logged-in/AllOrders";
import MakeOrder from "components/logged-in/MakeOrder";
import SymbolInfo from "components/logged-in/SymbolInfo";
import SymbolSelector from "components/logged-in/SymbolSelector";


export default function Trade() {
    const { currentTheme } = useThemeSwitcher();
    const [symbols, setSymbols] = useState([]);
    const [symbol, setSymbol] = useState();


    useEffect(() => {
    }, []);

    return (
        <LoggedInLayout>
            <div style={{height: "100%"}}>
                <Panel style={{ height: "auto" }}>
                    <Container ratio={8}>
                        <SymbolInfo />
                    </Container>
                    <Container ratio={2} style={{ margin: "auto" }}>
                        <SymbolSelector />
                    </Container>
                </Panel>
                <Panel>
                    <Container ratio={2}>
                        <OrderBook symbol={'BTCUSDT'} />
                    </Container>
                    <Container ratio={6} style={{ height: "95%" }}>
                        <AdvancedRealTimeChart
                            autosize
                            theme={currentTheme} 
                        // disabled_features={["datasource_copypaste"]}
                        />
                    </Container>
                    <Container ratio={2}>
                        <RecentTrades symbol={'BTCUSDT'} />
                    </Container>
                </Panel>
                <Panel>
                    <Container ratio={4}>
                        <AllOrders />
                    </Container>
                    <Container ratio={6}>
                       <MakeOrder />
                    </Container>
                </Panel>
            </div>
        </LoggedInLayout>
    )
}