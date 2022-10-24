import { Children, cloneElement } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { Form as AntdForm, Button } from "antd";
import { useForm } from "react-hook-form";
const { Item } = AntdForm;

export default function Form({ children, buttonAlign, schema }) {
    const { handleSubmit, reset, control, formState: { errors } } = useForm({ reValidateMode: "onSubmit", resolver: yupResolver(schema) });

    const onSubmit = data => console.log(data);

    return (
        <AntdForm
            className="form"
            labelCol={{
                span: 8,
              }}
            wrapperCol={{
                span: 16,
            }}
        >
            {
                Children.map(children, child => {
                    return cloneElement(child, { control, errors });
                })
            }
            <Item
                // style={{
                //     width: "100%",
                //     display: "flex",
                //     justifyContent: "center"
                // }}
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button
                    type="primary"
                    className="submit"
                    onClick={handleSubmit(onSubmit)}
                    style={{
                        color: "#FFFEF7",
                        marginRight: "10px"
                    }}
                >
                    Submit
                </Button>
                <Button
                    type="default"
                    style={{
                        border: "none"
                    }}
                    onClick={reset}
                >
                    Reset
                </Button>
            </Item>
        </AntdForm>
    )
}