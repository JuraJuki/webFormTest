import { Checkbox, DatePicker, Form, Radio } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AccommodationTypePicker } from "src/components/WebForm/components/AccommodationTypePicker/AccommodationTypePicker";
import { FItem } from "src/components/WebForm/components/FItem/FItem";
import { GuestInformationSection } from "src/components/WebForm/components/GuestInformationSection/GuestInformationSection";
import { GuestPicker } from "src/components/WebForm/components/GuestPicker/GuestPicker";
import { FItemName } from "src/components/WebForm/enums/FItemName";
import { AppLanguage } from "src/enums/AppLanguage";
import { getLocale } from "src/helpers/getLocale";
import classes from "./WebForm.module.scss";

const { RangePicker } = DatePicker;

export const WebForm = () => {
  const { t } = useTranslation();
  const [category, setCategory] = useState("mobileHome");
  const accommodationTypeHasNextToSea = true;

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className={classes.wrap}>
      <span>{t("accommodationTypeCategory")}</span>
      <Radio.Group
        className={classes.category}
        value={category}
        onChange={(e) => {
          e.preventDefault();
          setCategory(e.target.value);
        }}
      >
        <Radio value={"mobileHome"}>Mobilne kućice</Radio>
        <Radio value={"bungalow"}>Bungalovi</Radio>
        <Radio value={"campingPitch"}>Parcele</Radio>
      </Radio.Group>

      <Form className={classes.form} layout={"vertical"} onFinish={handleSubmit}>
        <FItem label={t("period")} name={FItemName.Period}>
          <RangePicker locale={getLocale(AppLanguage.HR)} format={"DD.MM.YYYY."} />
        </FItem>
        <FItem label={t("accommodationType")} name={FItemName.AccommodationType}>
          <AccommodationTypePicker />
        </FItem>
        {accommodationTypeHasNextToSea ? (
          <FItem name={FItemName.NextToSea} valuePropName={"checked"}>
            <Checkbox>{t("nextToSea")}</Checkbox>
          </FItem>
        ) : null}
        <FItem label={t("personPicker.label")} name={FItemName.GuestPicker}>
          <GuestPicker />
        </FItem>
        <FItem name={FItemName.Pet} valuePropName={"checked"}>
          <Checkbox>{t("pet")}</Checkbox>
        </FItem>
        <FItem name={FItemName.BoatRope} valuePropName={"checked"}>
          <Checkbox>{t("boatRope")}</Checkbox>
        </FItem>
        <FItem name={FItemName.BabyEquipment} valuePropName={"checked"}>
          <Checkbox>{t("babyEquipment")}</Checkbox>
        </FItem>
        <GuestInformationSection />
      </Form>
    </div>
  );
};
