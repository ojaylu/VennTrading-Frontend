import useWebSocket from "react-use-websocket";
import { useEffect } from 'react';

export function useBinWS(symbol, stream, defaultValue) {
    const { lastJsonMessage, sendJsonMessage } = useWebSocket("wss://stream.binance.com:9443/stream");

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