import panelStyles from "public/styles/panel.module.scss";
import layoutStyles from "public/styles/main_layout.module.scss";

export function Panel({ children, style = {} }) {
    return (
        <div className={[panelStyles.panel, layoutStyles.panel].join(" ")} style={style}>
            { children }
        </div>
    )
}

export function Container({ ratio, children, style = {} }) {
    return (
        <div className={[panelStyles.container, layoutStyles.container].join(" ")} style={{flex: `1 0 ${ratio}0%`, overflow: "hidden", ...style}}>
            { children }
        </div>
    )
}