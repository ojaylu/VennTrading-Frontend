import { Space } from "antd";

export default function ColContainer({ children, style = {}, title }) {
    return (
        <Space
            align="center"
            direction="vertical"
            style={{ width: "100%", height: "100%", padding: "5px", ...style }}
        >
            <b>{ title }</b><br />
            { children }
        </Space>
    )
}