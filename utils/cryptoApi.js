import dynamic from 'next/dynamic'

const a = dynamic(() => import("ccxt"), {
    ssr: false,
});

console.log(a.exchanges)

export const exchanges = a.exchanges;