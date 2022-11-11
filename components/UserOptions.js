import { Dropdown, Button } from "antd";
import { useAuth } from "./AuthProvider";
import { UserOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import ThemeSwitcher from "components/ThemeSwitcher";
import Link from "next/link";

function DropdownItem({ children, onClick }) {
    return (
        <Button type="text" size="small" onClick={onClick}>
            {children}
        </Button>
    )
}

export default function UserOptions() {
    const { isAuthenticated, logout } = useAuth();
    const authenticatedItems = [
        {key: "1", label: 
            <DropdownItem onClick={logout}>
                <LogoutOutlined style={{marginRight: "5px"}}/>
                Logout
            </DropdownItem>
        }
    ]
    const unauthenticatedItems = [
        {key: "1", label: 
            <Link href="/login">
                <DropdownItem type="text">
                    <LoginOutlined style={{marginRight: "5px"}}/>
                    Login
                </DropdownItem>
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