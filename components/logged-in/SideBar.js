import {
    HomeOutlined,
    StockOutlined
} from "@ant-design/icons";
import { Menu, Button } from "antd";
import { useAuth } from "components/AuthProvider";
import { useRouter } from "next/router";

function getMenuItems(items) {
    const keys = Object.keys(items);
    return keys.map(key => (
        {key, icon: items[key].icon, label: items[key].label}
    ));
}

export default function SideBar() {
    const { logout } = useAuth();
    const router = useRouter();

    const getPath = () => {
        const pathname = router.asPath;
        const segments = pathname.split("/"); // returns ["", "usr", ...]
        return segments[2];
    }

    const items = {
        main: {
            icon: <HomeOutlined />,
            handler: () => {
                router.push("/usr/main");
            },
            label: 'Home'
        },
        trade: {
            icon: <StockOutlined />,
            handler: () => {
                router.push("/usr/trade");
            },
            label: 'Trade'
        },
        logout: {
            label: (
                <Button
                    onClick={logout}
                    block
                    type="text"
                    style={{
                        color: "inherit"
                    }}
                >
                    Logout
                </Button>
            )
        }
    };
    
    return (
        <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[getPath()]}
            items={getMenuItems(items)}
            onClick={({ key }) => {
                console.log(key)
                items[key].handler();
            }}
        />
    )
}
