import { Tabs, Typography } from 'antd';
import _ from 'lodash';
import Image from "next/image";
import data from "optimized.json" assert { type: "json" };
import { useState } from 'react';

const onChange = (key) => {
  console.log(key);
};

const Layout = ({ children }) => (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        { children }
    </div>
)

export  function Optimized({ solutions }) {
    const a = Object.keys(data.opt2.images).map((imgTitle, innerIndex) => {
        console.log(imgTitle)
        const imgSrc = 'data:image/png;base64,' + data.opt2.images[imgTitle];
        return (
            <>
                <Typography.Title level={2}>{ imgTitle }</Typography.Title>
                <Image src={imgSrc} layout="intrinsic" alt="hi" key={`2-${innerIndex}`} height="400px" width="800px" />
                <br/>
            </>
        )
    });

    const b = Object.keys(data.opt1.images).map((imgTitle, innerIndex) => {
        console.log(imgTitle)
        const imgSrc = 'data:image/png;base64,' + data.opt1.images[imgTitle];
        return (
            <>
                <Typography.Title level={2}>{ imgTitle }</Typography.Title>
                <Image src={imgSrc} layout="intrinsic" alt="hi" key={`2-${innerIndex}`} height="400px" width="800px" />
                <br/>
            </>
        )
    });

    const items = [
        {
            key: "1",
            label: "Method 1",
            children: <Layout>{ a }</Layout>,
        },
        {
            key: "2",
            label: "Method 2",
            children: <Layout>{ b }</Layout>,
        },
    ];

    return (
        !_.isEmpty(solutions) &&
        <Tabs 
            defaultActiveKey="1" 
            items={items} 
            onChange={onChange} 
            centered
        />
    )
} 