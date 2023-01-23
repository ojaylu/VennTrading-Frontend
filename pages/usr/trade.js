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


export default function Trade({ symbols }) {
    const { currentTheme } = useThemeSwitcher();
    const { symbol, setSymbol, loading } = useSymbol(symbols);
    const [permissions, setPermissions] = useState([]);
    const [filters, setFilters] = useState({});

    const fetchSymbolInfo = (symbol) => {
        fetch(`http://localhost:4000/symbols/${symbol}`)
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
        symbol && fetchSymbolInfo(symbol);
    }, [symbol]);

    return (
        loading ||
        <LoggedInLayout>
            <Panel style={{ height: "auto" }}>
                <Container ratio={8} style={{ borderRight: "none" }}>
                    <SymbolInfo symbol={ symbol } />
                </Container>
                <Container ratio={2} style={{ margin: "auto" }}>
                    <SymbolSelector handler={ setSymbol } symbols={ symbols } />
                </Container>
            </Panel>
            <Panel style={{ height: "auto", padding: "0px 20px" }}>
                <Ticker symbol={symbol} />
            </Panel>
            <Panel>
                <Container ratio={2}>
                    <OrderBook symbol={ symbol } />
                </Container>
                <Container ratio={6}>
                    <AdvancedRealTimeChart
                        autosize
                        theme={currentTheme} 
                    // disabled_features={["datasource_copypaste"]}
                    />
                </Container>
                <Container ratio={2}>
                    <RecentTrades symbol={ symbol } />
                </Container>
            </Panel>
            <Panel style={{height: "450px"}}>
                <Container ratio={3}>
                    <TechnicalAnalysis colorTheme={currentTheme} width="100%" symbol={`BINANCE:${symbol}`} />
                </Container>
                <Container ratio={3}>
                    <MakeOrder symbol={ symbol } permissions={ permissions } />
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
                                children: <AllOrders symbol={ symbol } />
                            },
                            {
                                label: "Trades",
                                key: "viewTrades",
                                children: <UserTrades symbol={ symbol } />
                            }
                        ]}
                    />
                </Container>
            </Panel>
        </LoggedInLayout>
    )
}