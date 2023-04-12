import { useQuery } from '@apollo/client';
import { GET_TRADE_RECORD } from 'gql/queries';
import { useEffect, useState } from 'react';
import DynamicTable from 'components/DynamicTable';
import { useBinData } from 'utils/binanceHooks';

const binanceApi = "https://api.binance.com/api/v3/trades";
const limit = 20;



export default function RecentTrades({ symbol, pollingInterval = 500 }) {
    const [trades, setTrades] = useState([]);
    const data = useBinData({ symbol, stream: "trade", defaultValue: undefined, onMessage: replaceTrade});
    const upperSymbol = symbol.toUpperCase();

    function replaceTrade(e) {
        const recentTrade = JSON.parse(e.data)?.data;
        if(recentTrade && trades.length != 0) {
            setTrades(trades => {
                const copy = [...trades];
                copy.shift();
                copy.push({price: recentTrade.p, qty: recentTrade.q, time: recentTrade.T});
                return copy;
            });
        }
    }
    
    useEffect(() => {
        fetch(`${binanceApi}?symbol=${upperSymbol}&limit=${limit}`)
            .then(res => res.json())
            .then(result => setTrades(result));
    }, []);

    const newTrades = [] // trades.length != 0 && data? replaceTrade([...trades], {price: data.p, qty: data.q, time: data.time}): [];

    // const newToOld = data && [...data].reverse();

    return (
        <DynamicTable cols={["Price", "Quantity", "Time"]} body={ [{data: [...trades].reverse().map(record => [record.price, record.qty, new Date(record.time).toLocaleTimeString('it-IT')])}] } />
    )
}