import { Button } from "antd";
import { useState } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";

function ThemeSwitcher() {
    const [isDark, setDark] = useState(true);
    const { switcher, themes } = useThemeSwitcher();

    const switchTheme = () => {
        console.log(isDark)
        switcher({ theme: !isDark ?  themes.dark : themes.light })
        setDark(value => !value)
    }

    return (
        <Button
            shape="circle"
            onClick={switchTheme}
            type="primary"
        >
            {!isDark ? "D" : "L" }
        </Button>
    )
}

export default ThemeSwitcher;