import { Typography } from "antd";
import React from "react";
import styles from "./text.module.scss";

interface TextProps {
  children: React.ReactNode;
  variant: "body" | "header";
  color?:
    | "black"
    | "brandPrimary"
    | "white"
    | "cardText"
    | "disabled"
    | "offer"
    | "greenText"
    | "grayText"
    | "redText"
    | "footerText"
    | "brandSecondary"
    | "breadCrumps"
    | "productText"
    | "titleText";
  weight?: "300" | "400" | "500" | "600" | "700";
  fontSize?:
    | "8"
    | "11"
    | "10"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "18"
    | "20"
    | "22"
    | "24"
    | "26"
    | "28"
    | "30"
    | "32"
    | "36";
  textDecoration?: "line-through";
}

const fontColors = {
  brandPrimary: "#2c2c2c",
  brandSecondary: "#ff815a",
  cardText: "#396c66",
  white: "#fff",
  disabled: "#b4b4b4",
  grayText: "#6b6b81",
  redText: "#ff1818",
  offer: "#b7ca82",
  greenText: "#20841e",
  footerText: "#9499a9",
  titleText: "#3a3a3a",
  breadCrumps: "#767c83",
  productText: "#6f757b",
  black: "#000",
};

export const Text: React.FC<TextProps> = ({
  children,
  variant,
  color = "brandPrimary",
  weight,
  fontSize,
  textDecoration,
}) => {
  const { Text } = Typography;

  const commonStyle = styles.commonStyle;

  const variantStyle = styles[variant];

  const fontColor = fontColors[color];

  const style = {
    color: fontColor,
    fontWeight: weight,
    fontSize: `${fontSize}px`,
    textDecoration: textDecoration,
  };

  const combinedClassName = `${commonStyle} ${variantStyle}`;

  return (
    <Text className={combinedClassName} style={style}>
      {children}
    </Text>
  );
};
