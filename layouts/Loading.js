import Image from 'next/image';
import { logoWhite, logoBlack } from "utils/imagePaths"
import { useThemeSwitcher } from 'react-css-theme-switcher';

export default function Loading() {
  const { currentTheme } = useThemeSwitcher();
  return (
      <div
          style={{
              height: "100%",
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
        />
        Loading
      </div>
  )
}