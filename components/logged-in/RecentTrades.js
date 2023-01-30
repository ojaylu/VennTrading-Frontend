import { useQuery } from '@apollo/client';
import { GET_TRADE_RECORD } from 'gql/queries';
import { useEffect } from 'react';
import DynamicTable from 'components/DynamicTable';

export default function RecentTrades({ symbol, pollingInterval = 500 }) {
    const { error, data, startPolling, stopPolling } = useQuery(GET_TRADE_RECORD, {
        variables: {symbol: symbol},
        fetchPolicy: "network-only"
    });

    useEffect(() => {
        startPolling(pollingInterval);
        return () => {
            stopPolling();
        };
    }, [symbol]);

    const newToOld = data && [...data?.tradeRecord].reverse();

    return (
        <DynamicTable cols={["Price", "Quantity", "Time"]} body={ newToOld && [{data: newToOld.map(record => [_.round(record.price, 5), _.round(record.qty, 5), new Date(record.time).toLocaleTimeString('it-IT')])}] } />
    )
}