import { useQuery } from '@apollo/client';
import { GET_TRADE_RECORD } from 'gql/queries';

export default function Hi() {
    const { loading, error, data, startPolling } = useQuery(GET_TRADE_RECORD, {
        variables: {symbol: 'BTCUSDT'},
        fetchPolicy: 'network-only'
    });

    startPolling(500);

    console.log(data)
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}