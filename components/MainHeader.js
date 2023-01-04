import { Button, Typography, PageHeader } from "antd";
import { logoWhite, logoBlack } from "utils/imagePaths";
import { useThemeSwitcher } from "react-css-theme-switcher";
import Link from "next/link";
import UserOptions from "./UserOptions";

export default function MainHeader() {
  const routes  = [
    {label: "Introduction", path: "/"},
    {label: "Contact Us",  path: "/contact-us"}
  ];
  const { currentTheme } = useThemeSwitcher();
  
  const routeLinks = routes.map((route, index) => {
    return (
      <Link href={route.path} key={index}>
        <Button 
          type="link"
          className={
            currentTheme == "light"?
            "main-header-light" :
            "main-header-dark"
          }
        >{route.label}</Button>
      </Link>
    )
  });

  return (
      <PageHeader 
        title={"VennTrading"}
        avatar={{ src: currentTheme == "light" ? logoBlack : logoWhite }}
        subTitle={routeLinks}
        className="title"
        extra={
          <UserOptions />
        }
      />
  );
}