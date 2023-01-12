import { useThemeSwitcher } from "react-css-theme-switcher";
import styles from "public/styles/dynamic_table.module.scss";


// cols: [String] as the titles
// body: [{ data: [[String]], style: [{ style_for_col_1 }, ...] }, ...]
// for style, enter a falsy value to use default style, leave empty if no styling if needed for all cols
export default function DynamicTable({ cols, body= [] }) {
    const lenPerCol = 100 / cols.length;
    const {currentTheme} = useThemeSwitcher();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                border: currentTheme == "light"? "rgb(217, 218, 219)": "1px solid rgb(54, 60, 78)"
            }}
        >
            <div
                style={{
                    flex: "1 1",
                    display: "flex",
                    backgroundColor: currentTheme == "light"? "rgb(250, 250, 250)": "rgb(29, 29, 29)"
                }}
                className={currentTheme == "light"? styles.light_row: styles.dark_row}
            >
                {cols.map((col, index) => (
                    <div
                        style={{
                            flex: `0 0 ${lenPerCol}%`,
                            backgroundColor: "inherit",
                            paddingLeft: "5px"
                        }}
                        key={index}
                    ><b>{col}</b></div>
                ))

                }
            </div>
            {body.map(({data, style}) => (
                data.map((row, index) => (
                        <div
                            style={{
                                flex: "1 1",
                                display: "flex",
                                backgroundColor: currentTheme == "light"? "rgb(255, 255, 255)": "rgb(38, 38, 38)",
                            }}
                            key={index}
                            className={styles.body_row + " " +  (currentTheme == "light"? styles.light_row: styles.dark_row)}
                        >
                            {row.map((col, index) => (
                                <div
                                    style={{
                                        flex: `0 0 ${lenPerCol}%`,
                                        backgroundColor: "inherit",
                                        paddingLeft: "5px",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        ...(style && style[index])
                                    }}
                                    key={index}
                                >{col}</div>
                            ))}
                        </div>
                ))
            ))}
        </div>
    );
}