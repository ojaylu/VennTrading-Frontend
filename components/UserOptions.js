import { Dropdown, Button } from "antd";
import { useAuth } from "./AuthProvider";
import { UserOutlined, LoginOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import ThemeSwitcher from "components/ThemeSwitcher";
import Link from "next/link";
import { useRouter } from "next/router";

function DropdownItem({ children, onClick }) {
    return (
        <Button type="text" size="small" onClick={onClick}>
            {children}
        </Button>
    )
}

export default function UserOptions() {
    const { isAuthenticated, logout } = useAuth();
    const router = useRouter();

    const loginComponent = {key: "login", label: 
        <Link href="/login">
            <DropdownItem type="text">
                <LoginOutlined style={{marginRight: "5px"}}/>
                Login
            </DropdownItem>
        </Link>
    }
        
    const logoutComponent = {key: "logout", label: 
        <DropdownItem onClick={logout}>
            <LogoutOutlined style={{marginRight: "5px"}}/>
            Logout
        </DropdownItem>
    }
    const authenticatedItems = [
        {key: "1", label: 
            <DropdownItem onClick={() => router.push("/usr/settings")}>
                <SettingOutlined style={{marginRight: "5px"}}/>
                Settings
            </DropdownItem>
        }
    ]
    const unauthenticatedItems = [
    ]

    console.log(JSON.stringify(isAuthenticated));

    return (
        <>
            <Dropdown
                menu={{
                    items: isAuthenticated.user? [logoutComponent, ...(isAuthenticated.creds? authenticatedItems: [])]: [loginComponent]
                }}
                placement="bottom"
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