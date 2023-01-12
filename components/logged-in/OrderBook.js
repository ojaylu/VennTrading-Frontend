import { useQuery } from '@apollo/client';
import { GET_ORDER_BOOK } from 'gql/queries';
import { useEffect } from 'react';
import DynamicTable from 'components/DynamicTable';
import _ from "lodash";

export default function OrderBook({ symbol, pollingInterval = 1000 }) {
    const { error, data, startPolling, stopPolling } = useQuery(GET_ORDER_BOOK, {
        variables: {symbol: symbol},
        fetchPolicy: 'network-only'
    });

    // useEffect(() => {
    //     startPolling(pollingInterval);
    //     return () => {
    //         stopPolling();
    //     };
    // }, [symbol]);

    const reversedAsks = data? [...data?.orderBook.asks].reverse(): [];
    const bestAsk = data?.orderBook.asks[0][0];

    const bids = data?.orderBook.bids;
    const bestBid = data?.orderBook.bids[0][0];

    return (
        <DynamicTable cols={["Price", "Quantity"]} body={data && [{data: reversedAsks, style: [{color: "rgb(14, 203, 129)"}]}, {data: [[`Spread: ${_.round(bestAsk - bestBid, 3)}`, undefined]]}, {data: bids, style: [{color: "rgb(246, 70, 93)"}]}]} />
    )
}