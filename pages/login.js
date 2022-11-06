import { Button } from "antd";
import { GoogleOutlined, FacebookFilled, GithubFilled } from "@ant-design/icons";
import * as yup from "yup";
import FormInput from "components/FormInput";
import LoginForm from "components/Form";
import Link from 'next/link';
import { useThemeSwitcher } from "react-css-theme-switcher";
import { useAuth } from "components/AuthProvider";
import LogoTitle from "components/LogoTitle";


const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
}).required();

export default function Login() {
    const providers = [
        {name: "Google", icon: <GoogleOutlined />, color: "#c71610"},
        {name: "Facebook", icon: <FacebookFilled />, color: "#4267B3"},
        {name: "Github", icon: <GithubFilled />, color: "#211F1F"}
    ]
    const { currentTheme } = useThemeSwitcher();
    const { loginWithThirdParty, loginWithEmail } = useAuth();
    const loginHandler = ({ email, password }) => {
        loginWithEmail(email, password);
    }
    return (
        <div
            className="horizontal-flex-spaced fit-screen login"
            style={{
                background: currentTheme == "light" ? 
                    "linear-gradient(to right, #b6fbff, #83a4d4)" : 
                    "linear-gradient(to right, #434343 0%, black 100%)"
            }}
        >
            <div
                className="left"
            >
                <LogoTitle 
                    style={{
                        fontSize: "3rem",
                        fontWeight: "700",
                        marginLeft: "10px",
                        color: "inherit",
                        userSelect: "none"
                    }}
                    width="100px"
                    height="100px"
                    className="name"
                />
            </div>
            <div
                className="right"
            >
                <h2><b>Login</b></h2>
                <LoginForm
                    schema={schema}
                    submitHandler={loginHandler}
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
                        return (
                            <Button
                                key={index}
                                block
                                type="text"
                                style={{
                                    marginBottom: "5px",
                                    backgroundColor: provider.color,
                                    color: "#FFFEF7"
                                }}
                                onClick={() => {
                                    console.log(provider.name)
                                    loginWithThirdParty(provider.name.toLowerCase())
                                }}
                            >
                                {provider.icon}
                                {provider.name}
                            </Button>
                        )
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