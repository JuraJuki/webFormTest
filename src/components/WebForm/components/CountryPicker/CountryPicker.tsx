import { Select } from "antd";
import { CountryPickerProps } from "src/components/WebForm/components/CountryPicker/CountryPickerProps";
import classes from "src/components/WebForm/components/GuestPicker/GuestPicker.module.scss";

const { Option } = Select;

export const CountryPicker = ({ value = "", onChange }: CountryPickerProps) => {
  const getSelectOptions = () => {
    return [<Option>a</Option>];
  };

  return (
    <Select
      className={classes.select}
      options={getSelectOptions()}
      value={null}
      onSelect={onChange}
    />
  );
};
