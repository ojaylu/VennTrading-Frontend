import { Form, Input, Typography } from "antd";
import { useController } from "react-hook-form";
const { Item } = Form;

// no nd to fill in control, error, left, right
// rules and defaultValue are optional
export default function FormTextInput({ name, label, rules, defaultValue="", required=false, type, control, errors={}, left, right }) {
    const { field: { onChange, value, ref } } = useController({ name, control, rules, defaultValue });
    const Component = type ? Input[type] : Input;
    return (
        <div className="text-input" style={{overflow: "scroll"}}>
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
                    <Typography.Text style={{overflow: "scroll"}}>{errors[name]?.message}</Typography.Text>
                </Item>
            }
        </div>
    )
}