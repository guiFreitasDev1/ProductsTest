import React from "react";
import { Button as ButtonAntd, ButtonProps } from "antd";
import styles from "./button.module.scss";

interface CustomButtonProps extends ButtonProps {
  variant: "primary" | "secondary" | "buttonTransparent";
  fontSize?: "8" | "10" | "12" | "13" | "14" | "15" | "16";
  weight?: "300" | "400" | "500" | "600" | "700";
  flex?: 1;
  height?: string;
  width?: string;
  customStyle?: any;
}

export function Button({
  variant,
  fontSize = "13",
  height,
  weight,
  flex,
  width,
  customStyle,
  ...props
}: CustomButtonProps) {
  const commonStyle = styles.commonStyle;

  const variantStyle = styles[variant];

  const combinedClassName = `${commonStyle} ${variantStyle}`;

  const style = {
    fontSize: `${fontSize}px`,
    fontWeight: weight,
    flex: flex,
    height: height,
    width: width,
  };

  return (
    <ButtonAntd
      {...props}
      className={combinedClassName}
      style={{ ...style, ...customStyle }}
    />
  );
}
