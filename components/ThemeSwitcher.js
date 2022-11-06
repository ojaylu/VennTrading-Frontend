import { Switch } from "antd";
import { useThemeSwitcher } from "react-css-theme-switcher";

function ThemeSwitcher() {
    const { switcher, themes, currentTheme } = useThemeSwitcher();

    return (
        <Switch
            checkedChildren="Dark"
            unCheckedChildren="Light"
            checked={currentTheme == "dark"}
            onClick={checked => {
                switcher({ theme: checked ?  themes.dark : themes.light })
            }}
        />
    )
}

export default ThemeSwitcher;