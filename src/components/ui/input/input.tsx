import React from "react";
import { Input as InputAntd, InputProps } from "antd";
import styles from "./input.module.scss";
import { Text } from "../text";

interface CustomInputProps extends InputProps {
  value?: number;
  placeholder?: string;
  defaultValue?: string;
  label: string;
  required?: boolean;
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  size?: "small" | "large";
}

export function Input({
  value,
  placeholder,
  defaultValue,
  label,
  required,
  size = "large",
  type,
}: CustomInputProps) {
  const wrapperStyle = size === "large" ? styles.wrapper : styles.smallWrapper;

  const inputStyle =
    size === "large" ? styles.inputStyle : styles.smallInputStyle;

  const labelStyle =
    size === "large" ? (
      <Text variant="body" color="grayText" weight="500" fontSize="15">
        {label}
      </Text>
    ) : (
      <Text variant="body" color="grayText" weight="500" fontSize="13">
        {label}
      </Text>
    );

  return (
    <div className={wrapperStyle}>
      <div>{labelStyle}</div>
      <InputAntd
        className={inputStyle}
        required={required}
        defaultValue={defaultValue}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
