import { Select } from "antd";
import { useEffect, useState, useMemo } from "react";

export default function SymbolSelector({ handler, symbols, style}) {
    const options = useMemo(() => symbols.map(symbol => ({label: symbol, value: symbol})), [JSON.stringify(symbols)]);

    return (
        <Select
            showSearch
            placeholder="Choose a symbol"
            options={options}
            style={{ width: "90%", ...style}}
            onSelect={ handler }
        />
    );
}