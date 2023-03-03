import { FormInstance } from "antd";
import { Dispatch, SetStateAction } from "react";
import { AccommodationCategory } from "src/components/WebForm/components/CategoryPicker/enums/AccommodationCategory";

export interface CategoryPickerProps {
  category: AccommodationCategory;
  setValue: Dispatch<SetStateAction<AccommodationCategory>>;
  formRef: FormInstance;

  // These two are passed down from FormItem
  onChange?: (value: any) => void;
  value?: string;
}
