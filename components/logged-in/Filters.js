import ColContainer from "components/ColContainer";
import { useState, useEffect } from "react";
import { Tree } from "antd";

function Filter({ title, filter }) {
    return (
        <>
            <b>{title}</b><br />
            {Object.keys(filter).map((key, index) => <div key={index}>{key}: {filter[key]}</div>)
            }
        </>
    )
}

function treeChildrenGenerator(obj, treeKey) {
    const result = Object.keys(obj).map((key, index) => (
        {title: `${key}: ${obj[key]}`, key: `${treeKey}-${index}`}
    ));
    return result;
}

export default function Filters({ filters }) {
    const [treeData, setTreeData] = useState([]);
    useEffect(() => {
        const data = [];
        filters.PRICE_FILTER && data.push({
            title: "Price Filter",
            key: "PRICE_FILTER",
            children: treeChildrenGenerator(filters.PRICE_FILTER, "PRICE_FILTER")
        });
        filters.LOT_SIZE && data.push({
            title: "Quantity Filter",
            key: "LOT_SIZE",
            children: treeChildrenGenerator(filters.LOT_SIZE, "LOT_SIZE")
        });
        filters.MARKET_LOT_SIZE && data.push({
            title: "Market Quantity Filter",
            key: "MARKET_LOT_SIZE",
            children: treeChildrenGenerator(filters.MARKET_LOT_SIZE, "MARKET_LOT_SIZE")
        });
        filters.MIN_NOTIONAL && data.push({
            title: "Minimum Notional",
            key: "MIN_NOTIONAL",
            children: treeChildrenGenerator(filters.MIN_NOTIONAL, "MIN_NOTIONAL")
        });
        setTreeData(data);
    }, [filters]);
    return (
        // <ColContainer style={{overflowY: "scroll"}}>
        //     {filters.PRICE_FILTER && <Filter title="Price Filter" filter={filters.PRICE_FILTER} />}
        //     {filters.LOT_SIZE && <Filter title="Quantity Filter" filter={filters.LOT_SIZE} />}
        //     {filters.MARKET_LOT_SIZE && <Filter title="Market Quantity Filter" filter={filters.MARKET_LOT_SIZE} />}
        //     {filters.MIN_NOTIONAL && <Filter title="Minimum Notional" filter={filters.MIN_NOTIONAL} />}
        // </ColContainer>
        <ColContainer title="Filters">
            <div style={{ overflow: "scroll" }}>
            <Tree 
                    treeData={ treeData }
                />
            </div>
        </ColContainer>
    )
}