import styles from "public/styles/panel.module.scss";

export function Panel({ children, style = {} }) {
    return (
        <div className={styles.upper_panel} style={{height: "500px", ...style}}>
            { children }
        </div>
    )
}

export function Container({ ratio, children, style = {} }) {
    return (
        <div className={styles.container} style={{flex: `1 0 ${ratio}0%`, overflow: "hidden", ...style}}>
            { children }
        </div>
    )
}