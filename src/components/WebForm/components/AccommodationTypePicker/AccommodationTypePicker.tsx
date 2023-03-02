import { Select } from "antd";
import { AccommodationTypePickerProps } from "src/components/WebForm/components/AccommodationTypePicker/AccommodationTypePickerProps";
const { Option } = Select;

// the props are passed down by FormItem component
export const AccommodationTypePicker = ({ value = "", onChange }: AccommodationTypePickerProps) => {
  return (
    <Select style={{ width: "100%" }} value={value} onChange={onChange}>
      <Option key={"a"}>a</Option>
      <Option key={"b"}>b</Option>
    </Select>
  );
};
