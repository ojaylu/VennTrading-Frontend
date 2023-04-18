import LoggedInLayout from "layouts/logged-in/MainLayout";
import { Panel } from "layouts/Panel";
import { useEffect, useRef, useState } from 'react';
import { Button, Table, PageHeader } from 'antd';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "firebase-config";
import { message } from "antd";
import _ from "lodash";
import { RedoOutlined, PlusOutlined } from "@ant-design/icons";
import DeleteStrategyButton from "components/logged-in/DeleteStrategyButton";
import { useRouter } from "next/router";
import StartStopBotButton from "components/logged-in/StartStopBotButton";
import { useAuth } from "components/AuthProvider";
import StrategyDrawer from "components/logged-in/StrategyDrawer";

export default function Strategies({ symbols }) {
    const [strategies, setStrategies] = useState([]);
    const [refetch, setRefetch] = useState(true);
    const [openDrawer, setDrawerStatus] = useState(false);
    const router = useRouter();
    const { startBot, stopBot } = useAuth();

    const columns =[
        {
            title: "Strategy ID",
            dataIndex: "strategyId"
        },
        {
            title: "Symbol",
            dataIndex: "symbol"
        },
        {
            title: "Interval",
            dataIndex: "interval"
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (_, record) => (
                <>
                    <Button 
                        type="primary" 
                        shape="round" 
                        style={{ marginRight: "10px" }}
                        onClick={() => { router.push(`/usr/strategies/${record.strategyId}`) }}
                    >View</Button>
                    <StartStopBotButton 
                        running={ record.running } 
                        style={{ marginRight: "10px" }}
                        startHandler={async(quantity, paper) => {
                            const { status } = await startBot(record.strategyId, {...record, quantity, paper});
                            message.success(status);
                            setRefetch(true);
                        }}
                        stopHandler={async() => { 
                            const { status } = await stopBot(record.strategyId, record);
                            message.success(status);
                            setRefetch(true);
                        }}
                    />
                    <DeleteStrategyButton 
                        strategyId={ record.strategyId } 
                        f={ () => { setRefetch(true) } } 
                    />
                </>
            )
        }
    ]

    useEffect(() => {
        let aborded  = false;
        
        const docRef = doc(db, "users", auth.currentUser.uid);
        const fetchData = async() => {
            try{
                const docSnap = await getDoc(docRef);
                const docExist = docSnap.exists();
                if(docExist && !aborded) {
                    const data = docSnap.data();
                    const names = Object.keys(data);
                    setStrategies(names.map(id => ({
                        strategyId: id,
                        ...data[id]
                    })));
                } else if(!docExist) {
                    message.error(JSON.stringify("no such doc"));
                }
            } catch(e) {
                message.error(JSON.stringify(e));
            }
            setRefetch(false);
        }

        if(refetch) {
            fetchData();
        }

        return () => {
            aborded = true;
        }
    }, [refetch]);

    console.log("loading: " + auth.currentUser.uid)

    return (
        <LoggedInLayout>
            <PageHeader
                title="Strategies"
                extra={
                    <>
                        <Button icon={<PlusOutlined />} type="text" shape="circle" onClick={() => { setDrawerStatus(true) }} />
                        <Button icon={<RedoOutlined />} type="text" shape="circle" onClick={() => { setRefetch(true) }} />
                    </>
                }
            />
            <Panel style={{overflowY: "scroll"}}>
                <Table 
                    columns={ columns } 
                    dataSource={ strategies } 
                    rowKey="strategyId"
                    style={{
                        width: "100%"
                    }}
                    scroll={{
                        x: "100%"
                    }}
                    pagination={{
                        hideOnSinglePage: true
                    }}
                />
            </Panel>
            <StrategyDrawer open={ openDrawer } setOpen={ setDrawerStatus } symbols={symbols} />
        </LoggedInLayout>
    )
}