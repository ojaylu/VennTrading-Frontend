import useWebSocket from "react-use-websocket";
import { useEffect } from 'react';

const binanceApi = "wss://stream.binance.com:9443/stream";

export function useBinData({ symbol, stream, defaultValue, onMessage }) {
    const { lastJsonMessage, sendJsonMessage } = useWebSocket(binanceApi, {
        onMessage
    });

    useEffect(() => {
        sendJsonMessage({
            method: "SUBSCRIBE",
            params: [`${symbol}@${stream}`],
            id: 1
        });
        return () => {
            sendJsonMessage({
                method: "UNSUBSCRIBE",
                params: [`${symbol}@${stream}`],
                id: 1
            })
        };
    }, []);

    return lastJsonMessage?.data || defaultValue;
}