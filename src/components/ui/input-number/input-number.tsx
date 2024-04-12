import React, { Dispatch, SetStateAction } from "react";
import { InputNumber as AntInputNumber } from "antd";
import styles from "./input-number.module.scss";

interface InputNumberProps {
  setValue: Dispatch<SetStateAction<number>>;
  value: number;
}

export const InputNumber = ({ setValue, value }: InputNumberProps) => {
  function handleChangeValue(type: "increase" | "decrease") {
    if (type === "increase") {
      setValue((prev) => prev + 1);
      return;
    }
    setValue((prev) => prev - 1);
  }

  const selectBefore = (
    <div
      onClick={() => handleChangeValue("decrease")}
      className={styles.beforeButton}
    >
      -
    </div>
  );

  const selectAfter = (
    <div
      onClick={() => handleChangeValue("increase")}
      className={styles.beforeButton}
    >
      +
    </div>
  );

  return (
    <AntInputNumber
      controls={false}
      addonBefore={selectBefore}
      addonAfter={selectAfter}
      defaultValue={1}
      value={value}
    />
  );
};
