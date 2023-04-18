import { Button, Checkbox, InputNumber, Modal, message } from "antd";
import { useAuth } from "components/AuthProvider";
import { useState } from "react";

export default function StartStopBotButton({ running, startHandler, stopHandler, style }) {
    const [paper, setPaper] = useState(true);
    const [quantity, setQuantity] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Button 
                onClick={ running? () => { stopHandler() }: () => { setModalOpen(true) }} 
                shape="round" 
                style={ style }
                danger={ running }
            >{ running? "Stop": "Start" }</Button>
            <Modal title="Trading Bot Details" open={modalOpen} onOk={() => { startHandler(quantity, paper) }} onCancel={() => { setModalOpen(false) }} >
                <div>Quantity to trade: </div><InputNumber onChange={(value) => setQuantity(value)} />
                <br/>
                <br/>
                <div>Paper trade?</div><Checkbox onChange={(e) => { setPaper(e.target.checked) }} />
            </Modal>
        </>

    )
}