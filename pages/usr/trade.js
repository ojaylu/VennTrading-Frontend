import LoggedInLayout from "layouts/logged-in/MainLayout";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { useState, useEffect } from "react";
import OrderBook from "components/logged-in/OrderBook";
import RecentTrades from "components/logged-in/RecentTrades";
import { Panel, Container } from "layouts/Panel";
import AllOrders from "components/logged-in/UserOrders";
import MakeOrder from "components/logged-in/MakeOrder";
import SymbolInfo from "components/logged-in/SymbolInfo";
import SymbolSelector from "components/logged-in/SymbolSelector";
import { message, Tabs } from "antd";
import _ from "lodash";
import UserTrades from "components/logged-in/UserTrades";
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
import Filters from "components/logged-in/Filters";
import useSymbol from "utils/useSymbol";
import Ticker from "components/logged-in/Ticker";
import { useAuth } from "components/AuthProvider";


export default function Trade({ symbols }) {
    const { loggedInRequest } = useAuth();
    const { currentTheme } = useThemeSwitcher();
    const { upperSymbol, lowerSymbol, setSymbol, loading } = useSymbol(symbols);
    const [permissions, setPermissions] = useState([]);
    const [filters, setFilters] = useState({});

    const fetchSymbolInfo = (symbol) => {
        loggedInRequest(`http://localhost:4000/symbols/${symbol}`)
            .then(res => res.json())
            .then(({orderTypes, filters}) => {
                setPermissions(orderTypes);
                setFilters(
                    filters.reduce((obj, filter) => {
                        const {filterType: omit, ...rest} = filter;
                        return {...obj, [filter.filterType]: rest}
                }, {}));
            })
            .catch((err) => message.error(`${symbol}, ${JSON.stringify(err)}`));
    };

    useEffect(() => {
        upperSymbol && fetchSymbolInfo(upperSymbol);
    }, [upperSymbol]);

    console.log("hi");
    console.log("upper symbol: " + upperSymbol);

    return (
        loading ||
        <LoggedInLayout>
            <Panel style={{ height: "auto" }}>
                <Container ratio={8} style={{ borderRight: "none" }}>
                    <SymbolInfo symbol={ upperSymbol } />
                </Container>
                <Container ratio={2} style={{ margin: "auto" }}>
                    <SymbolSelector handler={ setSymbol } symbols={ symbols } />
                </Container>
            </Panel>
            <Panel style={{ height: "auto", padding: "0px 20px" }}>
                <Ticker symbol={upperSymbol} />
            </Panel>
            <Panel>
                <Container ratio={2}>
                    <OrderBook symbol={ lowerSymbol } />
                </Container>
                <Container ratio={6}>
                    <AdvancedRealTimeChart
                        autosize
                        theme={currentTheme} 
                    // disabled_features={["datasource_copypaste"]}
                    />
                </Container>
                <Container ratio={2}>
                    <RecentTrades symbol={ lowerSymbol } />
                </Container>
            </Panel>
            <Panel style={{height: "450px"}}>
                <Container ratio={3}>
                    <TechnicalAnalysis colorTheme={currentTheme} width="100%" symbol={`BINANCE:${upperSymbol}`} />
                </Container>
                <Container ratio={3}>
                    <MakeOrder symbol={ upperSymbol } permissions={ permissions } />
                </Container>
                <Container ratio={3}>
                    <Filters filters={ filters } />
                </Container>
            </Panel>
            <Panel>
                <Container ratio={1} style={{overflowY: "scroll"}}>
                    <Tabs 
                        defaultActiveKey="viewOrders"
                        centered
                        items={[
                            {
                                label: "Orders",
                                key: "viewOrders",
                                children: <AllOrders symbol={ upperSymbol } />
                            },
                            {
                                label: "Trades",
                                key: "viewTrades",
                                children: <UserTrades symbol={ upperSymbol } />
                            }
                        ]}
                    />
                </Container>
            </Panel>
        </LoggedInLayout>
    )
}