import { Select } from "antd";

export default function SymbolSelector() {
    return (
        <Select
            placeholder="Choose a symbol"
            options={[
                {
                value: 'jack',
                label: 'Jack',
                },
                {
                value: 'lucy',
                label: 'Lucy',
                },
                {
                value: 'tom',
                label: 'Tom',
                },
            ]}
        />
    );
}