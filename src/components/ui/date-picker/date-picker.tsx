import { Text } from "../text";
import styles from "./datePicker.module.scss";
import { DatePicker as AntDatePicker } from "antd";
interface DatePickerProps {
  value?: number;
  placeholder?: string;
  defaultValue?: string;
  onChange?: () => {};
  label: string;
}

export const DatePicker = ({
  defaultValue,
  onChange,
  placeholder,
  value,
  label,
}: DatePickerProps) => {
  return (
    <div className={styles.wrapper}>
      <Text variant="body" color="grayText" weight="500" fontSize="13">
        {label}
      </Text>
      <AntDatePicker
        onChange={onChange}
        className={styles.inputWrapper}
        placeholder={placeholder}
      />
    </div>
  );
};
