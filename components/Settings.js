import { Typography } from "antd";
import Form from "components/Form";
import FormTextInput from "components/FormTextInput";
import LoggedInLayout from "layouts/logged-in/MainLayout";
import * as yup from "yup";
import { useAuth } from "components/AuthProvider";

const { Title } = Typography;

export const schema = yup.object({
    key: yup.string().required(),
    secret: yup.string().required(),
}).required();

export const fields = [
    {name: "key", label: "Key", required: true, type: "Password"},
    {name: "secret", label: "Secret", required: true, type: "Password"}
]

export default function Settings() {
    const { saveKeySecret } = useAuth();

    return (
        <>
            <Title level={4}>
                The key and secret used to connect to Binance:
            </Title>
            <Form schema={schema} submitHandler={saveKeySecret}>
                {
                    fields.map((field, index) => 
                        <FormTextInput {...field} key={index} />
                    )
                }
            </Form>
        </>
    )
}