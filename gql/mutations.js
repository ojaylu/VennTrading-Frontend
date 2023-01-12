import { gql } from '@apollo/client';

export const POST_LIMIT = gql`
    mutation PostLimitOrder(
        $symbol: String!, 
        $side: String!, 
        $price: Float!, 
        $quantity: Float!, 
        $timeInForce: String!
    ) {
        limitOrder(
            symbol: $symbol, 
            side: $side, 
            price: $price, 
            quantity: $quantity, 
            timeInForce: $timeInForce
        ) {
            orderId
            transactionTime
        }
    }
`;

export const POST_MARKET = gql`
    mutation PostMarketOrder(
        $symbol: String!,
        $side: String!,
        $quantity: Float!
    ) {
        marketOrder(
            symbol: $symbol,
            side: $side,
            quantity: $quantity
        ) {
            orderId
            transactionTime
        }
    }
`;