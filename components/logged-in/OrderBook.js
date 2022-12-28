import { useQuery } from '@apollo/client';
import { GET_ORDER_BOOK } from 'gql/queries';
import { Table } from "antd";
import { useEffect } from 'react';
import styles from "public/styles/order_book.module.scss";

function CustomTable(props) {
    return (
        <div 
            {...props} 
            style={{
                display: "flex",
                flexDirection: "column",
                border: "solid white",
                height: "100%"
            }} 
        />
    )
}

function Row(props) {
    return (
        <div
            {...props} 
            style={{
                width: "100%",
                display: "flex",
                flex: "1 0"
            }}
            className={styles.exclude}
        />
    )
}

function Cell(props) {
    return (
        <div 
            {...props} 
            style={{
                flex: "1 0 50%"
            }}
            className={styles.exclude}
        />
    )
}

export default function OrderBook({ symbol }) {
    const { error, data, startPolling, stopPolling } = useQuery(GET_ORDER_BOOK, {
        variables: {symbol: 'BTCUSDT'},
        fetchPolicy: 'network-only'
    });

    useEffect(() => {
        startPolling(100000);
        return () => {
            stopPolling();
        };
    }, [symbol]);

    const columns = [
        {
            title: "Price",
            dataIndex: "price"
        },
        {
            title: "Quantity",
            dataIndex: "qty"
        }
    ]

    return (
        <Table 
            columns={columns} 
            dataSource={data && [...data.orderBook.asks.reverse(), ...data.orderBook.bids]}
            size="small"
            pagination={false}
            className="flex-table"
            tableLayout="fixed"
            // components={{
            //     table: CustomTable,
            //     header: {
            //         cell: Cell,
            //         row: Row
            //     },
            //     body: {
            //         wrapper: (props) => <div {...props} className="haha" style={{display: "flex", flexDirection: "column"}}/>,
            //         row: Row,
            //         cell: Cell
            //     }
            // }}
            // className={styles.table}
        />
    )
}