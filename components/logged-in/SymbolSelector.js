import { Select } from "antd";
import { useEffect, useState } from "react";

export default function SymbolSelector({ handler, symbols }) {

    return (
        <Select
            showSearch
            placeholder="Choose a symbol"
            options={symbols}
            style={{ width: "90%" }}
            onSelect={ handler }
        />
    );
}