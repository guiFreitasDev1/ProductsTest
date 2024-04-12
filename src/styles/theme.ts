import { ThemeConfig } from "antd";
import { Poppins } from "next/font/google";

export const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

interface Token {
  colorPrimary: string;
  fontFamily: string;
  fontSize: number;
  colorPrimaryHover: string;
  colorLink: string;
  colorIcon: string;
  colorTextSecondary: string;
  colorTextTertiary: string;
  colorTextLabel: string;
  colorErrorText: string;
  colorSuccess: string;
  colorSuccessHover: string;
  colorIconHover: string;
  colorError: string;
  colorErrorHover: string;
  colorSuccessBg: string;
  colorBorderSecondary: string;
  yellow: string;
  colorWhite: string;
  colorTextDisabled: string;
}

interface MyTheme extends ThemeConfig {
  token: Token;
}

export const theme: MyTheme = {
  token: {
    colorPrimary: "#1a1d2e",
    fontFamily: PoppinsFont.style.fontFamily,
    fontSize: 13,
    colorPrimaryHover: "#343a46",
    colorLink: "#233540",
    colorIcon: "#595b5d",
    colorTextSecondary: "#2b4973",
    colorTextTertiary: "#4F5E66",
    colorTextLabel: "#4D5766",
    colorErrorText: "#FF4D4F",
    colorSuccess: "#039952",
    colorSuccessHover: "#68c988",
    colorIconHover: "#374151",
    colorError: "#EC5353",
    colorErrorHover: "#e27272",
    colorSuccessBg: "#2ACD0F",
    colorBorderSecondary: "#E2E6E9",
    yellow: "#FFBF00",
    colorWhite: "#fff",
    colorTextDisabled: "#858585",
  },
};
