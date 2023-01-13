import { gql } from '@apollo/client';

export const GET_USER_ASSET = gql`
    query GetUserAsset {
        userAssets {
            asset
            free
            locked
            freeze
            withdrawing
            btcValuation
        }
    }
`;

export const GET_ORDER_BOOK = gql`
    query GetOrderBook($symbol: String!, $limit: Int) {
        orderBook(symbol: $symbol, limit: $limit) {
            bids
            asks
        }
    }
`;

export const GET_TRADE_RECORD = gql`
    query GetTradeRecord($symbol: String!, $limit: Int) {
        tradeRecord(symbol: $symbol, limit: $limit) {
            price
            qty
            time
        }
    }
`;

export const GET_ALL_ORDERS = gql`
    query GetAllOrders($symbol: String!, $limit: Int) {
        orderRecord(symbol: $symbol, limit: $limit) {
            orderId
            price
            origQty
            executedQty
            type
            side
            time
        }
    }
`;

export const GET_USER_TRADES = gql`
    query GetUserTrades($symbol: String!) {
        userTradeRecord(symbol: $symbol) {
            id
            orderId
            price
            qty
            commission
            commissionAsset
            time
            isBuyer
            isMaker
        }
    }
`;