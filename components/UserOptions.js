import { Dropdown, Button } from "antd";
import { useAuth } from "./AuthProvider";
import { UserOutlined, LoginOutlined } from "@ant-design/icons";
import ThemeSwitcher from "components/ThemeSwitcher";
import Link from "next/link";


export default function UserOptions() {
    const { isAuthenticated } = useAuth();
    const authenticatedItems = [
        {key: "1", label: "hi"}
    ]
    const unauthenticatedItems = [
        {key: "1", label: 
            <Link href="/login">
                <div>
                    <LoginOutlined style={{marginRight: "5px"}}/>
                    Login
                </div>
            </Link>
        }
    ]

    return (
        <>
            <Dropdown
                menu={{
                    items: isAuthenticated ? authenticatedItems : unauthenticatedItems
                }}
                placement="bottomLeft"
                arrow
            >
                <Button
                    type="text"
                    shape="circle"
                    icon={<UserOutlined />}
                />
            </Dropdown>
            <ThemeSwitcher />
        </>
    )
}