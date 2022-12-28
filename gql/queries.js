import { gql } from '@apollo/client';

export const GET_ORDER_BOOK = gql`
    query GetOrderBook($symbol: String!, $limit: Int) {
        orderBook(symbol: $symbol, limit: $limit) {
            bids {
                price
                qty
            }
            asks {
                price
                qty
            }
        }
    }
`;

export const GET_TRADE_RECORD = gql`
    query GetTradeRecord($symbol: String!, $limit: Int) {
        tradeRecord(symbol: $symbol, limit: $limit) {
            price
            qty
            quoteQty
            time
        }
    }
`;