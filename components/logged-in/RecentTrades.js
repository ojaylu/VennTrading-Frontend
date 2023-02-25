import { useQuery } from '@apollo/client';
import { GET_TRADE_RECORD } from 'gql/queries';
import { useEffect, useState } from 'react';
import DynamicTable from 'components/DynamicTable';
import { useBinData } from 'utils/binanceHooks';

const binanceApi = "https://api.binance.com/api/v3/trades";
const limit = 20;

async function replaceTrade(e) {
    await e?.data.json();
}

export default function RecentTrades({ symbol, pollingInterval = 500 }) {
    const [trades, setTrades] = useState([]);
    const data = useBinData({ symbol, stream: "trade", defaultValue: undefined, onMessage: replaceTrade});
    const upperSymbol = symbol.toUpperCase();
    
    useEffect(() => {
        fetch(`${binanceApi}?symbol=${upperSymbol}&limit=${limit}`)
            .then(res => res.json())
            .then(result => setTrades(result));
    }, []);

    const newTrades = [] // trades.length != 0 && data? replaceTrade([...trades], {price: data.p, qty: data.q, time: data.time}): [];

    // const newToOld = data && [...data].reverse();

    return (
        <DynamicTable cols={["Price", "Quantity", "Time"]} body={ [{data: newTrades.map(record => [record.price, record.qty, new Date(record.time).toLocaleTimeString('it-IT')])}] } />
    )
}