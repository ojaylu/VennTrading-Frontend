import { Form, Input } from "antd";
import { useController } from "react-hook-form";
const { Item } = Form;

export default function FormInput({ name, control, rules, defaultValue="", label, required=false, errors={}, type }) {
    const { field: { onChange, value, ref } } = useController({ name, control, rules, defaultValue });
    const Component = type ? Input[type] : Input;
    console.log(errors)
    return (
        <>
            <Item
                required={required}
                label={label}
            >
                <Component
                    label={label}
                    onChange={onChange}
                    value={value}
                    ref={ref}
                />
            </Item>
            <p>{errors[name]?.message}</p>
        </>
    )
}