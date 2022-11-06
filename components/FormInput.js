import { Form, Input, Typography } from "antd";
import { useController } from "react-hook-form";
const { Item } = Form;

export default function FormInput({ name, control, rules, defaultValue="", label, required=false, errors={}, type, left, right }) {
    const { field: { onChange, value, ref } } = useController({ name, control, rules, defaultValue });
    const Component = type ? Input[type] : Input;
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
            {
                errors[name]?.message &&
                <Item
                    wrapperCol={{
                        offset: left,
                        span: right,
                    }}
                >
                    <Typography.Text>{errors[name]?.message}</Typography.Text>
                </Item>
            }
        </>
    )
}