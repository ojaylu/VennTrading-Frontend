import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useSymbol(symbols) {
    const router = useRouter();
    const symbol = router.query?.symbol;

    console.log("usesymbol called");
    console.log("symbols:", symbols);
    console.log("symbol:", symbol);

    useEffect(() => {
        console.log("called")
        const lastSymbol = localStorage.getItem("last-symbol");
        if (!_.isEmpty(symbols)) {
            if (lastSymbol && symbols.some(element => element.value == lastSymbol)) {
                router.push({
                    query: { symbol: lastSymbol }
                });
            } else {
                router.push({
                    query: { symbol: symbols[0]?.value }
                });
            }
        }
    }, [symbols]);

    const setSymbol = symbol? (symbol) => {
            router.push({
                query: { symbol }
            });
            localStorage.setItem("last-symbol", symbol);
        }: () => {};

    return { symbol, setSymbol };
}