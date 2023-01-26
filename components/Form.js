import { Children, cloneElement } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { Form as AntdForm, Button } from "antd";
import { useForm } from "react-hook-form";
const { Item } = AntdForm;

export default function Form({ submitHandler=()=>{}, children, schema, left=8, right=16, nonTxt, style={} }) {
    const { handleSubmit, reset, control, formState: { errors } } = useForm({ reValidateMode: "onSubmit", resolver: yupResolver(schema) });

    return (
        <AntdForm
            className="form venn-form"
            labelCol={{
                span: left,
              }}
            wrapperCol={{
                span: right,
            }}
            style={style}
        >
            {nonTxt}
            {
                Children.map(children, child => {
                    return cloneElement(child, { control, errors, left, right });
                })
            }
            <Item
                wrapperCol={{
                    offset: left,
                    span: right,
                }}
            >
                <Button
                    type="primary"
                    className="submit venn-submit"
                    onClick={handleSubmit(data => {
                        submitHandler(data);
                        reset();
                    })}
                    style={{
                        color: "#FFFEF7",
                        marginRight: "10px"
                    }}
                >
                    Submit
                </Button>
                <Button
                    type="text"
                    style={{
                        border: "none"
                    }}
                    onClick={() => reset()}
                >
                    Reset
                </Button>
            </Item>
        </AntdForm>
    )
}