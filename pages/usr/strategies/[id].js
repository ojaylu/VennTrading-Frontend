import { Button, InputNumber, PageHeader, Popconfirm, Statistic, Typography, message } from "antd";
import LoggedInLayout from "layouts/logged-in/MainLayout";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "firebase-config";
import { useRouter } from "next/router";
import StartStopBotButton from "components/logged-in/StartStopBotButton";
import DeleteStrategyButton from "components/logged-in/DeleteStrategyButton";
import StrategyTree from "components/logged-in/StrategyTree";
import { useAuth } from "components/AuthProvider";
import _ from "lodash";
import { images } from "optimized.json" assert { type: "json" };
import { Optimized } from "components/logged-in/Optimized";

function BacktestPopup({ defaultValue, confirmHandler, disabled }) {
    const [quantity, setQuantity] = useState(defaultValue);
    const [photos, setPhotos] = useState([]);

    return (
        <Popconfirm
            title={
                <>
                    Input the quantity that you would like to backtest against: 
                    <InputNumber 
                        min={0} 
                        defaultValue={quantity} 
                        onChange={(number) => { number && setQuantity(number) }}
                    />
                </>
            }
            onConfirm={() => { confirmHandler(quantity) }}
            placement="bottom"
            disabled={disabled}
        >
            <Button 
                type="primary" 
                style={{ marginRight: "10px" }}
                disabled={ disabled }
            >Backtest</Button>
        </Popconfirm>
    )
}

export default function Strategy() {
    const [strategy, setStrategy] = useState({});
    const { loggedInPost, startBot, stopBot, loggedInRequest } = useAuth();
    const [backtestingData, setBacktestingData] = useState({});
    const [tradingData, setTradingData] = useState({});
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const [solutions, setSolutions] = useState({});
    const { id } = router.query;

    const getBacktestingData = async(strat, q) => {
        const backtestingResult = await loggedInPost("http://localhost:4000/backtesting", {
            ...strat, 
            quantity: q
        }).then(data => data.json());
        const tradingData = await loggedInRequest(`http://localhost:4000/trading-bot/${id}?symbol=${strat.symbol}&interval=${strat.interval}`)
            .then(data => data.json());
        setBacktestingData(backtestingResult);
        if(tradingData.status == "has bot") {
            setTradingData(tradingData.metrics);
        }
        console.log("quantity: " + q);
    }

    useEffect(() => {
        let aborded  = false;
        
        const docRef = doc(db, "users", auth.currentUser.uid);
        const fetchData = async() => {
            try{
                const docSnap = await getDoc(docRef);
                const docExist = docSnap.exists();
                if(docExist && !aborded) {
                    const strat = docSnap.get(id);
                    setStrategy(strat);
                    await getBacktestingData(strat, quantity);
                } else if(!docExist) {
                    message.error(JSON.stringify("no such doc"));
                }
            } catch(e) {
                message.error(JSON.stringify(e));
            }
        }

        fetchData();

        return () => {
            aborded = true;
        }
    }, [id]);

    return (
        <LoggedInLayout style={{ display: "flex", flexDirection: "column" }}>
            <PageHeader 
                title={`Strategy ID: ${ id }`}
                subTitle={`Symbol: ${ strategy.symbol } - Interval: ${ strategy.interval }`}
                extra={<>
                    <StartStopBotButton 
                        running={ strategy.running }
                        startHandler={async(quantity, paper) => {
                            const {status} = await startBot(id, {...strategy, quantity, paper});
                            message.success(status);
                            setStrategy(strat => ({...strat, running: true}));
                        }}
                        stopHandler={async() => {
                            const { status } = await stopBot(id, strategy);
                            message.success(status);
                            setStrategy(strat => ({...strat, running: false}));
                        }}
                    />
                    <DeleteStrategyButton strategyId={ id } f={() => { router.push("/usr/strategies") }} />
                </>}
                style={{ flex: "0 0" }}
            />
            <div style={{ display: "flex", flex: "1 1" }}>
                <div style={{ flex: "1 1 20%", display: "flex", justifyContent: "center" }}>
                    <div>
                        <Typography.Title level={5}>
                            Indicators
                        </Typography.Title>
                        <StrategyTree strategy={ strategy.strategy } />
                    </div>
                </div>
                <div style={{ flex: "1 1 80%", alignItems: "center", display: "flex", flexDirection: "column" }}>
                    <Typography.Title level={4}>Metrics on Most Recent Data</Typography.Title>
                    <Typography style={{ marginBottom: "10px" }}>(based on {quantity} coin)</Typography>
                    <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "40px", backgroundColor: "#808080", borderRadius: "10px" }}>
                        { Object.keys(backtestingData).map((metric, index) => (
                            <Statistic 
                                key={index} 
                                title={metric.toUpperCase()} 
                                value={backtestingData[metric]} 
                                suffix={metric.toLowerCase() == "return"? "%": "USD"}
                                precision={2}
                                style={{ margin: "0 10px" }}
                            />
                        )) }
                    </div>
                    {
                        !_.isEmpty(tradingData) &&
                        <>
                            <Typography.Title level={4}>Metrics on Live Trading Bot</Typography.Title>
                            <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "40px", backgroundColor: "#808080", borderRadius: "10px" }}>
                                { Object.keys(tradingData).map((metric, index) => (
                                    <Statistic 
                                        key={index} 
                                        title={metric.toUpperCase()} 
                                        value={tradingData[metric]} 
                                        suffix={metric.toLowerCase() == "return"? "%": "USD"}
                                        precision={2}
                                        style={{ margin: "0 10px" }}
                                    />
                                )) }
                            </div>
                        </>
                    }
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <BacktestPopup 
                            defaultValue={quantity} 
                            confirmHandler={value => {
                                setQuantity(value);
                                getBacktestingData(strategy, value);
                            }} 
                            disabled={_.isEmpty(strategy)} 
                        />
                        <Button 
                            onClick={ ()=>{setSolutions({a: 1})} }
                        >Optimize</Button>
                    </div>
                </div>
            </div>
            <Optimized solutions={ solutions } />
        </LoggedInLayout>
    )
}