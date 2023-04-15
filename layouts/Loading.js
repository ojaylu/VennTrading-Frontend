import Image from 'next/image';
import { logoWhite, logoBlack } from "utils/imagePaths"
import { useThemeSwitcher } from 'react-css-theme-switcher';

export default function Loading() {
  const { currentTheme } = useThemeSwitcher();
  return (
      <div
          style={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
          }}
      >
        <Image
          src={ currentTheme == "light"? logoBlack : logoWhite }
          width="100"
          height="100"
          priority
          style={{
            marginRight: "20px"
          }}
          alt=""
        />
        <div>
          loading...
        </div>
      </div>
  )
}