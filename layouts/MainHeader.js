import { PageHeader } from "antd";
import logo from "public/images/logo_white.png";

export default function MainHeader() {
    return (
        <PageHeader 
          title={<em>VennTrading</em>}
          avatar={{ src: logo.src }}
          subTitle="hi"
          className="title"
        />
    );
}