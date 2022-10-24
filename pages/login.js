import { Button } from "antd";
import { GoogleOutlined, FacebookFilled, GithubFilled } from "@ant-design/icons";
import * as yup from "yup";
import FormInput from "components/FormInput";
import LoginForm from "components/Form";
import Link from 'next/link';


const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
}).required();

export default function Login() {
    const providers = [
        {name: "Google", icon: <GoogleOutlined />, color: "#c71610"},
        {name: "Facebook", icon: <FacebookFilled />, color: "#4267B3"},
        {name: "Github", icon: <GithubFilled />, color: "#211F1F"}
    ]
    return (
        <div
            className="login"
        >
            <div
                className="left"
            >
                <div
                    className="name"
                >
                    VennTrading
                </div>
            </div>
            <div
                className="right"
            >
                <h2><b>Login</b></h2>
                <LoginForm
                    schema={schema}
                >
                    <FormInput name="email" label="Email" required />
                    <FormInput name="password" label="Password" required type="Password" />
                </LoginForm>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        margin: "20px"
                    }}
                >
                    <hr style={{flex: "auto"}}/>
                    <p style={{margin: "0 10px"}}>Or sign in using</p>
                    <hr style={{flex: "auto"}}/>
                </div>
                {
                    providers.map((provider, index) => {
                        return (<Button
                            key={index}
                            block
                            type="text"
                            style={{
                                marginBottom: "5px",
                                backgroundColor: provider.color,
                                color: "#FFFEF7"
                            }}
                        >
                            {provider.icon}
                            {provider.name}
                        </Button>)
                    })
                }
                <div style={{marginTop: "10px"}}>
                    Or <Link href="/sign-up">sign up
                    </Link>
                </div>
            </div>
        </div>
    )
}