import { useState } from "react";
// import Plot from 'react-plotly.js';
import LoggedInLayout from "layouts/logged-in/MainLayout";
import DatePicker from "react-datepicker";
import dynamic from "next/dynamic";
import SymbolSelector from "components/logged-in/SymbolSelector";
import { Select, Radio, Button } from "antd";
import useSymbol from "utils/useSymbol";
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

export default function Analysis({ symbols }) {
  const { symbol, setSymbol, loading } = useSymbol(symbols);
  const [data, setData] = useState([{}]);
  const [plotResult, setPlotResult] = useState({});
  const [interval, setInterval] = useState("1d");
  //const [time1, setTime1] = useState([{}])
  const [startDate, setStartDate] = useState(new Date(2022, 1, 1));
  const [endDate, setEndDate] = useState(new Date());
  const [indicators, setIndicators] = useState([]);
  const [value, setValue] = useState("Choose Indicator");

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
    setValue("Choose Indicator");
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
      <SymbolSelector symbols={symbols} handler={symbolHandler} />
      <>
        <Select
          onSelect={handleAddIndicator}
          options={selectOptions}
          value={value}
        />
        <>
          {indicators.map((indicator, outerIndex) => (
            <div style={{ display: "flex" }} key={outerIndex}>
              {Object.keys(indicator).map((field, innerIndex) =>
                field == "indicator" ? (
                  <p key={`${outerIndex}-${innerIndex}`}>{indicator[field]}</p>
                ) : (
                  <input
                    type="number"
                    name={field}
                    onChange={(e) => handleInputChange(outerIndex, e)}
                    placeholder={field}
                    key={`${outerIndex}-${innerIndex}`}
                  />
                )
              )}
              <button
                onClick={() => handleRemovePlayers(outerIndex)}
                key={outerIndex}
              >
                Remove
              </button>
            </div>
          ))}
        </>
      </>

      <p> Time period:</p>
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          timeInputLabel="Start Time:"
          dateFormat="yyyy-MM-dd HH:mm"
          showTimeInput
        />

        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          timeInputLabel="End Time:"
          dateFormat="yyyy-MM-dd HH:mm"
          showTimeInput
        />
      </div>
      <p> Interval:</p>
      <div>
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

      <Button type="primary" onClick={handleSubmit}>Submit</Button>

      <div>
        <Plot
          data={
            Object.keys(plotResult).length > 0
              ? Object.values(plotResult).flat()
              : []
          }
          layout={{ width: 1000, height: 800 }}
        />
      </div>
    </LoggedInLayout>
  );
}
