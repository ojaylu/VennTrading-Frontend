import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import StrategyChooser from './StrategyChooser';
import SymbolSelector from './SymbolSelector';
import { db, auth } from 'firebase-config';
import { doc, setDoc } from "firebase/firestore"; 
import { setStrategy } from 'utils/firebase/firestore';
const { Option } = Select;

const intervals = ["1M", "1m", "1w", "1s"];

export default function StrategyDrawer({ open, setOpen, symbols }) {
  const [strategyName, setStrategyName] = useState("");
  const [symbol, setSymbol] = useState(symbols[0] && "");
  const [chosenIndicators, setChosenIndicators] = useState({});
  const [interval, setInterval] = useState("1M");

  useEffect(() => {
    if(symbol == "" && symbols.length != 0) {
      setSymbol(symbols[0]);
    }
  }, [symbols])

  const onClose = () => {
    setOpen(false);
  };

  const saveHandler = () => {
    console.log(JSON.stringify({
      strategy: chosenIndicators,
      running: false,
      symbol,
      interval
    }))

    setStrategy(strategyName, {
      strategy: chosenIndicators,
      running: false,
      symbol,
      interval
    })
  }
  console.log(strategyName)

  return (
      <Drawer
        title="Create a new strategy"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            {/* <Button onClick={onClose} type="primary">
              Submit
            </Button> */}
          </Space>
        }
      >
        <Input placeholder="Strategy name" onChange={(e) => { setStrategyName(e.target.value) }} style={{ marginBottom: "10px" }} />
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <SymbolSelector symbols={symbols} handler={setSymbol} style={{ flexBasis: "50%" }} />
          <Select
              showSearch
              placeholder="Choose a interval"
              options={intervals.map(interval => ({ label: interval, value: interval }))}
              onSelect={ (chosenInterval)=>{setInterval(chosenInterval)} }
              style={{ flexBasis: "50%" }}
          />
        </div>
        <StrategyChooser chosenIndicators={chosenIndicators} setChosenIndicators={setChosenIndicators} saveHandler={saveHandler} />
      </Drawer>
  );
};