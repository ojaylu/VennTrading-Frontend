import { GET_WINDOW_STATS } from "gql/queries";
import { Select, Statistic } from "antd";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import styles from "public/styles/ticker.module.scss";

const stats = [
    { title: "Price Change", key: "priceChange" },
    { title: "Price Change %", key: "priceChangePercent" },
    { title: "Weighted Avg. Price", key: "weightedAvgPrice" },
    { title: "High Price", key: "highPrice" },
    { title: "Low Price", key: "lowPrice" },
    { title: "Last Price", key: "lastPrice" },
    { title: "Volume", key: "volume" },
    { title: "No. of Trades", key: "count" }
]

const options = ["1m", "1h", "1d"].map(option => ({label: option, value: option}));

export default function Ticker({ symbol }) {
    const [interval, setInterval] = useState("1d");
    const { error, data, startPolling, stopPolling } = useQuery(GET_WINDOW_STATS, {
        variables: {symbol, interval},
        fetchPolicy: 'network-only'
    });

    console.log("data", data, symbol);

    return (
        <div style={{display: "flex", overflow: "hidden", alignItems: "center", width: "100%"}} className={styles.ticker}>
            <div style={{display: "flex", overflowX: "scroll", marginRight: "5px"}} className={styles.stats}>
                {
                    data? 
                    stats.map(field => (
                        <Statistic title={field.title} value={data.windowStats[field.key]} />
                    )): <></>
                }
            </div>
            <Select 
                options={options} 
                defaultValue={interval} 
                onChange={val => {
                    console.log("val", val)
                    setInterval(val)
                }}
                style={{marginLeft: "auto"}}
            />
        </div>
    )
}