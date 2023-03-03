import { Radio } from "antd";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CategoryPickerProps } from "src/components/WebForm/components/CategoryPicker/CategoryPickerProps";
import { AccommodationCategory } from "src/components/WebForm/components/CategoryPicker/enums/AccommodationCategory";
import classes from "./CategoryPickerProps.module.scss";

export const CategoryPicker = ({ category, setValue, formRef, onChange }: CategoryPickerProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    onChange?.(category);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.wrap}>
      <h4>{t("accommodationTypeCategory")}</h4>
      <Radio.Group
        value={category}
        onChange={(e) => {
          e.preventDefault();
          // must reset all fields on category change
          formRef?.resetFields();
          setValue(e.target.value);
          onChange?.(e.target.value);
        }}
      >
        <Radio value={AccommodationCategory.MobileHome}>Mobilne kućice</Radio>
        <Radio value={AccommodationCategory.Bungalow}>Bungalovi</Radio>
        <Radio value={AccommodationCategory.CampingPitch}>Parcele</Radio>
      </Radio.Group>
    </div>
  );
};
