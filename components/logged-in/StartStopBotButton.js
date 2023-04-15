import { Button, message } from "antd";
import { useAuth } from "components/AuthProvider";

export default function StartStopBotButton({ running, startHandler, stopHandler, style }) {
    return (
        <Button 
            onClick={ running? stopHandler: startHandler } 
            shape="round" 
            style={ style }
            danger={ running }
        >{ running? "Stop": "Start" }</Button>
    )
}