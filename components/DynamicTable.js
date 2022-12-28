import { theme } from "antd";

const { useToken } = theme;

export default function DynamicTable({ cols, data }) {
    const lenPerCol = 100 / cols.length;
    const { token } = useToken();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                backgroundColor: token.colorPrimary
            }}
        >
            <div
                style={{
                    flex: "1 0",
                    display: "flex"
                }}
            >
                {cols.map(col => (
                    <div
                        style={{
                            flex: `1 0 ${lenPerCol}%`
                        }}
                    >{col}</div>
                ))

                }
            </div>
            {data.map(row => (
                <div
                    style={{
                        flex: "1 0",
                        display: "flex"
                    }}
                >
                    {row.map(col => (
                        <div
                            style={{
                                flex: `1 0 ${lenPerCol}%`,
                                backgroundColor: "inherit"
                            }}
                        >{col}</div>
                    ))}
                </div>
            ))}
        </div>
    );
}