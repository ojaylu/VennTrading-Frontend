import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 30,
    }}
    spin
  />
);

export default function Loading() {
    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
          hi
            {/* <Spin indicator={antIcon} /> */}
        </div>
    )
}