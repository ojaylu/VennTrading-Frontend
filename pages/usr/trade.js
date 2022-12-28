import LoggedInLayout from "layouts/logged-in/MainLayout";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import styles from "public/styles/trade.module.css";
import { useState, useEffect } from "react";
import OrderBook from "components/logged-in/OrderBook";
import DynamicTable from "components/DynamicTable";


export default function Trade() {
    const { currentTheme } = useThemeSwitcher();
    const [symbols, setSymbols] = useState([]);
    const [symbol, setSymbol] = useState();


    useEffect(() => {

    }, []);

    return (
        <LoggedInLayout>
            <div style={{height: "100%", border: "solid green"}}>

            
                <div className={styles.upper_panel}>
                    <div style={{flex: "1 0 20%", border: "solid yellow"}}>
                        {/* <OrderBook symbol={symbol} /> */}
                        <DynamicTable cols={[1,2]} data={[[1,1], [2,2]]} />
                    </div>
                    <div style={{flex: "1 0 60%"}}>
                        <AdvancedRealTimeChart
                        autosize
                        theme={currentTheme} 
                        // disabled_features={["datasource_copypaste"]}
                        />
                    </div>
                    <div
                        style={{flex: "1 0 20%"}}
                    >
                        content
                    </div>
                </div>
            </div>
        </LoggedInLayout>
    )
}