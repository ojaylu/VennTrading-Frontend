import { useQuery } from '@apollo/client';
import { GET_ORDER_BOOK } from 'gql/queries';
import DynamicTable from 'components/DynamicTable';
import _ from "lodash";
import { useBinData } from 'utils/binanceHooks';

// symbol must be lower case
export default function OrderBook({ symbol, pollingInterval = 1000 }) {
    const data = useBinData({ symbol, stream: "depth10", defaultValue: undefined });
    const reversedAsks = data? [...data?.asks].reverse(): [];
    const bestAsk = data?.asks[0][0];

    const bids = data?.bids;
    const bestBid = data?.bids[0][0];

    return (
        <DynamicTable cols={["Price", "Quantity"]} body={data && [{data: reversedAsks, style: [{color: "rgb(14, 203, 129)"}]}, {data: [[`Spread: ${_.round(bestAsk - bestBid, 3)}`, undefined]]}, {data: bids, style: [{color: "rgb(246, 70, 93)"}]}]} />
    )
}