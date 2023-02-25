import { gql } from '@apollo/client';

export const GET_USER_ASSET = gql`
    query GetUserAsset {
        userAssets {
            assetList
            assets {
                asset
                free
                locked
                freeze
                withdrawing
                ipoable
                btcValuation
                total
            }
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

export const GET_WINDOW_STATS = gql`
    query GetWindowStats($symbol: String!, $interval: String!) {
        windowStats(symbol: $symbol, interval: $interval) {
            priceChange
            priceChangePercent
            weightedAvgPrice
            highPrice
            lowPrice
            lastPrice
            volume
            count
        }
    }
`;