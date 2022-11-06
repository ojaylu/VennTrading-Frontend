import { Layout } from "antd";
import { useThemeSwitcher } from "react-css-theme-switcher";

const { Header } = Layout;

export default function LayoutHeader({ style = {}, children, ...rest }) {
    const { currentTheme } = useThemeSwitcher();

    return (
        <Header
            {...rest}
            style={{
                padding: 0,
                height: "auto",
                backgroundColor: currentTheme == "light" ? "inherit" : null,
                ...style
            }}
        >
            { children }
        </Header>
    )
}