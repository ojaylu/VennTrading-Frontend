import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import _ from "lodash";

export default function useSymbol(symbols) {
    const router = useRouter();
    const symbol = router.query?.symbol;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const lastSymbol = localStorage.getItem("last-symbol");
        if (!_.isEmpty(symbols)) {
            if (symbol && symbols.some(_symbol => _symbol == symbol)) {
                setLoading(false);
                localStorage.setItem("last-symbol", symbol);
            } else if (lastSymbol && symbols.some(_symbol => _symbol == lastSymbol)) {
                setLoading(true);
                router.push({
                    query: { symbol: lastSymbol }
                });
            } else {
                setLoading(true);
                router.push({
                    query: { symbol: symbols[0] }
                });
            }
        }
    }, [JSON.stringify(symbols), symbol]);

    const setSymbol = (newSymbol) => {
            if (symbol != newSymbol) {
                setLoading(true);
                router.push({
                    query: { newSymbol }
                });
                localStorage.setItem("last-symbol", newSymbol);
            }
        };

    return { symbol, setSymbol, loading };
}