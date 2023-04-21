import { useState } from "react";
// import Plot from 'react-plotly.js';
import { CloseOutlined } from "@ant-design/icons";
import LoggedInLayout from "layouts/logged-in/MainLayout";
import dynamic from "next/dynamic";
import SymbolSelector from "components/logged-in/SymbolSelector";
import { Select, Radio, Button, DatePicker, TimePicker, Input, message, Alert, Modal } from "antd";
import styles from "public/styles/main_layout.module.scss";
import useSymbol from "utils/useSymbol";
import { useThemeSwitcher } from "react-css-theme-switcher";
import StrategyChooser from "components/logged-in/StrategyChooser";
import { indicatorOptions } from "utils/indicators";
import { setStrategy } from "utils/firebase/firestore";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const _candleLayout = {
  dragmode: 'zoom', 
  margin: {
    r: 10, 
    t: 25, 
    b: 40, 
    l: 60
  }, 
  showlegend: false, 
  xaxis: {
    autorange: true, 
    //domain: [0, 1], 
    //range: [plotResult.x[0], plotResult.x[-1]], 
    //rangeslider: {range: [plotResult.x[0], plotResult.x[-1]]}, 
    title: 'Date', 
    //type: 'date'
  }, 
  yaxis: {
    autorange: true, 
    
    type: 'linear'
  }
};

const dateHandler = (date, setDate) => {
  return chosenDate => {
    if (date) {
      setDate(currentDate => {
        const modifyDate = currentDate;
        modifyDate.year(chosenDate.year()).month(chosenDate.month()).date(chosenDate.date());
        return modifyDate;
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
  const { upperSymbol, setSymbol, loading } = useSymbol(symbols);
  const [data, setData] = useState([{}]);
  const [plotResult, setPlotResult] = useState({});
  const [interval, setInterval] = useState("1d");
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const { currentTheme } = useThemeSwitcher();
  const [candleStick, setCandleStick] = useState('1');
  const [candleLayout, setCandleLayout] = useState({});
  const [candleData, setCandleData] = useState([]);
  const [indicators, setIndicators] = useState([]);
  const [chosenIndicators, setChosenIndicators] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [strategyName, setStrategyName] = useState("");


  const symbolHandler = (selectedSymbol) => {
    console.log("chosen symbol:", selectedSymbol);
    setSymbol(selectedSymbol);
  };

  const onIntervalChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
    setInterval(e.target.value);
  };

  const onCandleStickChange = (e) => {
    console.log(`Candlestick is:${e.target.value}`);
    setCandleStick(e.target.value);
  };

  const addHandler = (selectedIndicator) => {
    setIndicators((currentList) => {
      const values = [...currentList];
      values.push({
        indicator: selectedIndicator,
        ...indicatorOptions[selectedIndicator],
      });
      return values;
    });
  }

  const removeHandler = (index) => {
    setIndicators((currentList) => {
      const values = [...currentList];
      values.splice(index, 1);
      return values;
    });
  }

  const changeHandler = (index, updatedField, updatedValue) => {
    setIndicators((currentList) => {
      const values = [...currentList];
      values[index][updatedField] = updatedValue;
      return values;
    });
  }

  const saveHandler = () => {
    setStrategy(strategyName, {
      strategy: chosenIndicators,
      running: false,
      symbol: upperSymbol,
      interval
    })
  }

  const handleSubmit = () => {
    console.log(indicators);
    if (candleStick == '1'){
      try {
        fetch("http://localhost:5000/ohlc", {
          method: "POST",
          body: JSON.stringify({
            symbol: upperSymbol,
            interval: interval,
            indicators: indicators,
            
          }),
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        }).then(res => res.json()).then(result => {
          setPlotResult(result);
          setCandleLayout(_candleLayout);
          setCandleData([{
            x: result.x,
            open: result.open,
            close: result.close,
            low: result.low,
            high: result.high,
            decreasing: {line: {color: '#7F7F7F'}}, 
            increasing: {line: {color: '#17BECF'}}, 
            line: {color: 'rgba(31,119,180,1)'}, 
            type: 'candlestick', 
            //xaxis: 'x', 
            //yaxis: 'y',
          }]);
        })
      } catch (err) {
        console.log(err);
      };
      
    } else {
      try {
        message.success("blahblah")
        const response = fetch("http://localhost:5000/results", {
          method: "POST",
          body: JSON.stringify({
            symbol: upperSymbol,
            interval: interval,
            indicators: indicators,
          }),
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        }).then(res => res.json()).then(result => {
          setPlotResult(result);
          console.log(result);
        });
      } catch (err) {
        console.log(err);
      };
    }
    

    /*
    const body = {
      symbol: "BTCUSDT",
      interval: interval,
      start: startDate.getTime(),
      end: endDate.getTime(),
      indicators: indicators,
    };

    if (startDate && endDate) {
      body.startDate = startDate;
      body.endDate = endDate;
    }
    if (candleStick){
      try {
        const response = await fetch("http://localhost:5000/ohlc", {
          method: "POST",
          body: JSON.stringify({
            
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
    } else {
      try {
        const response = await fetch("http://localhost:5000/results", {
          method: "POST",
          body: JSON.stringify(body),
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
      }*/
   
    

    const options = {
			exportEnabled: true,
			title: {
				text: "BTCUSDT"
			},
			axisX: {
				valueFormatString: "D MMM"
			},
			axisY: {
				title: "Price",
				prefix: "$"
			},
			data: [{
				type: "candlestick",
				name: "BTCUSDT",
				showInLegend: true,
				yValueFormatString: "$##0.00",
				xValueType: "dateTime",
				dataPoints: plotResult
			}]
		}
  }

console.log(plotResult)

  return (
    <LoggedInLayout style={{ overflowX: "hidden" }}>
      <div
        style={{
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowX: "scroll"
        }}
        className={styles.panel}
      >
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ flex: "1 0 70%" }}>
            <SymbolSelector
              symbols={symbols}
              handler={symbolHandler}
              style={{ width: "100%" }}
            />
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
              <Radio.Group onChange={onCandleStickChange} defaultValue='0'>
                <Radio.Button value='0'>Off</Radio.Button>
                <Radio.Button value='1'>On</Radio.Button>
              </Radio.Group>
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
            
            {candleStick?
              <Plot
                data={candleData}
                layout = {{...candleLayout, ...(currentTheme == "dark" && {
                  plot_bgcolor:"black",
                  paper_bgcolor:"black",
                  font: {
                    color: "white"
                  }})
                }}
                style={{ width: "100%" }}
              />:
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
            }
          </div>
          <div style={{ flexBasis: "30%", display: "flex", flexDirection: "column" }}>
            <StrategyChooser 
              indicators={indicators} 
              addAddit={addHandler} 
              removeAddit={removeHandler} 
              changeAddit={changeHandler} 
              chosenIndicators={chosenIndicators} 
              setChosenIndicators={setChosenIndicators} 
              saveHandler={() => { setModalOpen(true) }} 
              separate
            />
            <Button type="primary" onClick={handleSubmit}>
                Submit
            </Button>
          </div>
        </div>
      </div>
      <Modal title="Save Strategy" open={modalOpen} onOk={saveHandler} onCancel={() => { setModalOpen(false) }}>
        <Input onChange={(e) => { setStrategyName(e.target.value) }} placeholder="Enter a name for your strategy" />
      </Modal>
    </LoggedInLayout>
  );
}
