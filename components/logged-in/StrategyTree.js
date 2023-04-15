import { Tree } from 'antd';
import _ from 'lodash';
import { useEffect, useState } from 'react';

export default function StrategyTree({ strategy={} }) {
    const [treeData, setTreeData] = useState([]);

    useEffect(() => {
        if(!_.isEmpty(strategy)) {
            const data = Object.keys(strategy).map((indicator, outerKey) => {
                return ({
                    title: indicator,
                    key: `${outerKey}`,
                    children: Object.keys(strategy[indicator]).map((parameter, innerKey) => ({
                        title: `${parameter}: ${strategy[indicator][parameter]}`,
                        key: `${outerKey}-${innerKey}`
                    }))
                })
            })
            setTreeData(data);
        }
    }, [strategy])

    return (
        <Tree
            treeData={treeData}
            showLine={true}
            // selectable={false}
            expandedKeys={Object.keys(strategy).map((_, index) => `${index}`)}
        />
    );
}