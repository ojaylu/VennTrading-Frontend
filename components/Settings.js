import { Typography } from "antd";
import Form from "components/Form";
import FormTextInput from "components/FormTextInput";
import LoggedInLayout from "layouts/logged-in/MainLayout";
import * as yup from "yup";
import aes from "crypto-js/aes";
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

export const sumbitHandler = creds => {
    const encryptedCreds = aes.encrypt(JSON.stringify(creds), process.env.NEXT_PUBLIC_API_SECRET).toString();
    // loggedInRequest("http://localhost:4000/hi", {
    //     body: JSON.stringify({ "hi": "bye" }),
    //     method: "POST",
    //     "mode": "cors",
    //     "credentials": "include",

    // });
    loggedInRequest("http://localhost:4000/binance-keys", {
        body: JSON.stringify({ encryptedCreds }),
        method: "POST",
        headers: {
            "Content-Type":  "application/json"
        }
    });
}

export default function Settings() {
    const { loggedInRequest } = useAuth();
    console.log("API SECRET" + process.env.NEXT_PUBLIC_API_SECRET);

    return (
        <>
            <Title level={4}>
                The key and secret used to connect to Binance:
            </Title>
            <Form schema={schema} submitHandler={sumbitHandler}>
                {
                    fields.map((field, index) => 
                        <FormTextInput {...field} key={index} />
                    )
                }
            </Form>
        </>
    )
}