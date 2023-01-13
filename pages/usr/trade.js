import LoggedInLayout from "layouts/logged-in/MainLayout";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { useState, useEffect, useRef } from "react";
import OrderBook from "components/logged-in/OrderBook";
import RecentTrades from "components/logged-in/RecentTrades";
import { Panel, Container } from "layouts/Panel";
import AllOrders from "components/logged-in/AllOrders";
import MakeOrder from "components/logged-in/MakeOrder";
import SymbolInfo from "components/logged-in/SymbolInfo";
import SymbolSelector from "components/logged-in/SymbolSelector";
import { useRouter } from "next/router";
import { message, Tabs } from "antd";
import _ from "lodash";
import UserTrades from "components/logged-in/UserTrades";


export default function Trade() {
    const { currentTheme } = useThemeSwitcher();
    const router = useRouter();
    const symbol = router.query?.symbol;
    const [symbols, setSymbols] = useState([]);
    const [permissions, setPermissions] = useState([]);
    const [filters, setFilters] = useState({});

    const fetchSymbolInfo = (symbol) => {
        fetch(`http://localhost:4000/symbols/${symbol}`)
            .then(res => res.json())
            .then(({orderTypes, filters}) => {
                setPermissions(orderTypes);
                setFilters(filters.reduce((obj, filter) => (
                    {...obj, [filter.filterType]: filter}
                ), {}));
        })
            .catch((err) => message.error(`${symbol}, ${JSON.stringify(err)}`));
    };

    const symbolHandler = (symbol) => {
        router.push({
            query: { symbol }
        });
        localStorage.setItem("last-symbol", symbol);
    }

    useEffect(() => {
        const lastSymbol = localStorage.getItem("last-symbol");
        if (!_.isEmpty(symbols)) {
            if (lastSymbol && symbols.some(element => element.value == lastSymbol)) {
                fetchSymbolInfo(lastSymbol);
                router.push({
                    query: { symbol: lastSymbol }
                });
            } else {
                fetchSymbolInfo(symbols[0].value);
                router.push({
                    query: { symbol: symbols[0]?.value }
                });
            }
        }
    }, [symbols]);

    useEffect(() => {
        fetch("http://localhost:4000/symbols")
            .then(res => res.json())
            .then(data => setSymbols(data.symbols));
    }, []);

    return (
        <LoggedInLayout>
            <Panel style={{ height: "auto" }}>
                <Container ratio={8}>
                    <SymbolInfo symbol={ symbol } />
                </Container>
                <Container ratio={2} style={{ margin: "auto", borderLeft: "none" }}>
                    <SymbolSelector handler={ symbolHandler } symbols={ symbols } />
                </Container>
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
            <Panel>
                <Container ratio={5} style={{overflowY: "scroll"}}>
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
                <Container ratio={5}>
                    <MakeOrder symbol={ symbol } permissions={ permissions } filters={ filters } />
                </Container>
            </Panel>
        </LoggedInLayout>
    )
}