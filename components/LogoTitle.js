import { Typography } from "antd";
import Image from "next/image";
import { logoWhite } from "utils/imagePaths";

export default function LogoTitle({ style, width, height, level, className }) {
    return (
        <div
            className={className}
            style={{
                display: "flex",
                alignItems: "center"
            }}
        >
            <Image
                src={logoWhite}
                height={height}
                width={width}
            />
            <Typography.Title
                level={level}
                style={{
                    margin: 0,
                    marginLeft: "5px",
                    ...style
                }}
            >
                VennTrading
            </Typography.Title>
        </div>
    )
}