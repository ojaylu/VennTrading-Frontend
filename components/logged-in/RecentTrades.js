import { useQuery } from '@apollo/client';
import { GET_TRADE_RECORD } from 'gql/queries';
import { useEffect, useState } from 'react';
import DynamicTable from 'components/DynamicTable';
import { useBinWS } from 'utils/useBinWS';

const binanceApi = "https://api.binance.com/api/v3/trades";
const limit = 20;

function replaceTrade(arr, newRecord) {
    const trades = arr;
    trades.shift();
    trades.push();
    return trades;
}

export default function RecentTrades({ symbol, pollingInterval = 500 }) {
    const data = useBinWS(symbol, "trade", undefined);
    const upperSymbol = symbol.toUpperCase();
    const [trades, setTrades] = useState([]);

    useEffect(() => {
        fetch(`${binanceApi}?symbol=${upperSymbol}&limit=${limit}`)
            .then(res => res.json())
            .then(result => setTrades(result));
    }, []);

    const newTrades = trades.length == 0 && data? replaceTrade([...trades], {price: data.p, qty: data.q, time: data.time}): 

    // const newToOld = data && [...data].reverse();

    // return (
    //     <DynamicTable cols={["Price", "Quantity", "Time"]} body={ newToOld && [{data: newToOld.map(record => [record.p, record.q, new Date(record.time).toLocaleTimeString('it-IT')])}] } />
    // )

    return undefined
}