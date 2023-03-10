import { useState } from "react";
// import Plot from 'react-plotly.js';
import { CloseOutlined } from "@ant-design/icons";
import LoggedInLayout from "layouts/logged-in/MainLayout";
import dynamic from "next/dynamic";
import SymbolSelector from "components/logged-in/SymbolSelector";
import { Select, Radio, Button, DatePicker, TimePicker, Input, message } from "antd";
import styles from "public/styles/main_layout.module.scss";
import useSymbol from "utils/useSymbol";
import { useThemeSwitcher } from "react-css-theme-switcher";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const indicatorOptions = {
  MACD: { a: 0, b: 0 },
  RSI: { a: 0, b: 0 },
  BB: { period: 20, std: 2 },
  PSAR: { init_af: 0.02, af_step: 0.02, max_af: 0.2 },
  OBV: { period: 20 },
};

const selectOptions = Object.keys(indicatorOptions).map((value) => ({
  label: value,
  value: value,
}));

const dateHandler = (date, setDate) => {
  return chosenDate => {
    if (date) {
      setDate(currentDate => {
        const modifyDate = currentDate;
        modifyDate.year(chosenDate.year()).month(chosenDate.month()).date(chosenDate.date())
      })
    } else {
      setDate(chosenDate);
    }
  }
}

const timeHandler = (date, setDate) => {
  return chosenTime => {
    if (date) {
      setDate(currentDate => {
        const modifyDate = currentDate;
        modifyDate.hour(chosenTime.hour()).minute(chosenTime.minute());
        return modifyDate;
      })
    } else {
      message.warning("Choose a date first.");
    }
  }
}

export default function Analysis({ symbols }) {
  const { symbol, setSymbol, loading } = useSymbol(symbols);
  const [data, setData] = useState([{}]);
  const [plotResult, setPlotResult] = useState({});
  const [interval, setInterval] = useState("1d");
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const [indicators, setIndicators] = useState([]);
  const { currentTheme } = useThemeSwitcher();

  const symbolHandler = (selectedSymbol) => {
    console.log("chosen symbol:", selectedSymbol);
    setSymbol(selectedSymbol);
  };

  const handleAddIndicator = (selectedIndicator) => {
    setIndicators((currentList) => {
      const values = [...currentList];
      values.push({
        indicator: selectedIndicator,
        ...indicatorOptions[selectedIndicator],
      });
      return values;
    });
  };

  const handleRemovePlayers = (index) => {
    setIndicators((currentList) => {
      const values = [...currentList];
      values.splice(index, 1);
      return values;
    });
  };

  const handleInputChange = (index, e) => {
    setIndicators((currentList) => {
      const values = [...currentList];
      const updatedField = e.target.name;
      values[index][updatedField] = e.target.value;
      return values;
    });
  };

  const onIntervalChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
    setInterval(e.target.value);
  };

  const handleSubmit = async () => {
    console.log(indicators);

    try {
      const response = await fetch("http://localhost:5000/results", {
        method: "POST",
        body: JSON.stringify({
          symbol: "BTCUSDT",
          interval: interval,
          start: startDate.getTime(),
          end: endDate.getTime(),
          indicators: indicators,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(response.status);
      }

      const results = await response.json();

      setPlotResult(results);
      console.log(plotResult);
      console.log("DATE: ", startDate.getTime());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoggedInLayout>
      <div
        style={{
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className={styles.panel}
      >
        <div style={{ display: "flex", width: "100%" }}>
          <SymbolSelector
            symbols={symbols}
            handler={symbolHandler}
            style={{ flexBasis: "70%" }}
          />
          <Select
            onSelect={handleAddIndicator}
            value={null}
            options={selectOptions}
            style={{ flexBasis: "30%" }}
            placeholder="Choose Indicator"
          />
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ flex: "1 0 70%" }}>
            <div style={{display: "flex"}}>
              <div style={{width: "50%"}}>
                <div style={{paddingLeft: "5px"}}>From</div>
                <div style={{display: "flex"}}>
                  <DatePicker style={{flexGrow: 1}} value={startDate} placeholder="From Date" onChange={dateHandler(startDate, setStartDate)} showClear={false} />
                  <TimePicker style={{flexGrow: 1}} value={startDate} format="HH:mm" onChange={timeHandler(startDate, setStartDate)} showClear={false} />
                  <Button
                    onClick={() => setStartDate(null)}
                    icon={<CloseOutlined />}
                    shape="circle"
                    type="text"
                  />
                </div>
              </div>
              <div style={{width: "50%"}}>
                <div style={{paddingLeft: "5px"}}>To</div>
                <div style={{display: "flex"}}>
                  <DatePicker style={{flexGrow: 1}} value={endDate} placeholder="From Date" onChange={dateHandler(endDate, setEndDate)} showClear={false} />
                  <TimePicker style={{flexGrow: 1}} value={endDate} format="HH:mm" onChange={timeHandler(endDate, setEndDate)} showClear={false} />
                  <Button
                    onClick={() => setEndDate(null)}
                    icon={<CloseOutlined />}
                    shape="circle"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div style={{margin: "auto", width: "max-content", marginTop: "5px"}}>
              <Radio.Group onChange={onIntervalChange} defaultValue="1h">
                <Radio.Button value="1m">1 Minute</Radio.Button>
                <Radio.Button value="30m">30 Minutes</Radio.Button>
                <Radio.Button value="1h">1 Hour</Radio.Button>
                <Radio.Button value="12h">12 Hours</Radio.Button>
                <Radio.Button value="1d">1 Day</Radio.Button>
                <Radio.Button value="1w">1 Week</Radio.Button>
                <Radio.Button value="1M">1 Month</Radio.Button>
                {/*<Radio.Button value="3M">3 Months</Radio.Button>
                <Radio.Button value="6M">6 Months</Radio.Button>
                <Radio.Button value="1Y">1 Year</Radio.Button>*/}
              </Radio.Group>
            </div>
            <Plot
              data={
                Object.keys(plotResult).length > 0
                  ? Object.values(plotResult).flat()
                  : []
              }
              style={{ width: "100%" }}
              layout={currentTheme == "dark" && {
                plot_bgcolor:"black",
                paper_bgcolor:"black",
                font: {
                  color: "white"
                }
              }}
            />
          </div>
          <div style={{ flexBasis: "30%" }}>
            <>
              {indicators.map((indicator, outerIndex) => (
                <div style={{ display: "flex" }} key={outerIndex}>
                  {Object.keys(indicator).map((field, innerIndex) =>
                    field == "indicator" ? (
                      <p key={`${outerIndex}-${innerIndex}`}>
                        {indicator[field]}
                      </p>
                    ) : (
                      <Input
                        // type="number"
                        name={field}
                        onChange={(e) => handleInputChange(outerIndex, e)}
                        placeholder={field}
                        key={`${outerIndex}-${innerIndex}`}
                      />
                    )
                  )}
                  <Button
                    onClick={() => handleRemovePlayers(outerIndex)}
                    key={outerIndex}
                    icon={<CloseOutlined />}
                    shape="circle"
                    type="text"
                  />
                </div>
              ))}
            </>

            <Button type="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </LoggedInLayout>
  );
}
