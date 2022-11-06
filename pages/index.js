import { useState } from "react";
import { Button, Layout, Typography } from "antd";
import { banner } from "utils/imagePaths";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useThemeSwitcher } from "react-css-theme-switcher";
import LogoTitle from "components/LogoTitle";
import PublicPage from "layouts/PublicPage";
const AdvancedRealTimeChart = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);

export default function index() {
  const [loading, setLoading] = useState(false);
  const { currentTheme } = useThemeSwitcher();
  const router = useRouter();
  const toLoginHandler = () => {
    setLoading(true);
    router.push("/login").then(() => {
      setLoading(false);
    });
  };

  return (
    <PublicPage className="public-page">
      <div
        style={{
          backgroundImage: `url(${banner})`,
          height: "400px",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "row-reverse",
          width: "100%"
        }}
      >
        <div
          style={{
            flexBasis: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "white"
          }}
        >
          <LogoTitle 
            style={{
              color: "inherit"
            }}
            width="50px"
            height="50px"
            level={1}
          />
          <Typography.Paragraph
            style={{
              color: "inherit",
              textAlign: "center"
            }}
          >
            Trading platform equipped with <br />
            self-optimizing AI trading bot.
          </Typography.Paragraph>
          <Button
            type="primary"
            shape="round"
            onClick={toLoginHandler}
            loading={loading}
          >
            Learn more
          </Button>
        </div>
      </div>
      <Typography.Title
        style={{
          textAlign: "center",
          marginBottom: "10px"
        }}
      >
        Market Summary
      </Typography.Title>
      <div style={{height: "500px", width: "80%"}}>
        <AdvancedRealTimeChart
          autosize
          theme={currentTheme} 
          disabled_features={["datasource_copypaste"]}
        />
      </div>
    </PublicPage>
  )
}