import styles from "public/styles/panel.module.scss";
import { useThemeSwitcher } from "react-css-theme-switcher";

export function Panel({ children, style = {} }) {
    const { currentTheme } = useThemeSwitcher();
    return (
        <div className={styles.upper_panel} style={{height: "500px", backgroundColor: currentTheme == "light"? "rgb(255, 255, 255)": "rgb(38, 38, 38)", ...style}}>
            { children }
        </div>
    )
}

export function Container({ ratio, children, style = {} }) {
    return (
        <div className={styles.container} style={{flex: `1 0 ${ratio}0%`, ...style}}>
            { children }
        </div>
    )
}