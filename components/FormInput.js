import { Form } from "antd";
const { Item } = Form;

export function FormInput({ component, required, label }) {
    return (
        <Item
            required={required}
            label={label}
        >{component}
        </Item>
    );
}