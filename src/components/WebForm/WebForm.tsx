import { CloseSquareOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Checkbox, DatePicker, Form, FormListFieldData, Radio } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AccommodationTypePicker } from "src/components/WebForm/components/AccommodationTypePicker/AccommodationTypePicker";
import { FItem } from "src/components/WebForm/components/FItem/FItem";
import { FItemRequired } from "src/components/WebForm/components/FItem/FItemRequired";
import { GuestInformationSection } from "src/components/WebForm/components/GuestInformationSection/GuestInformationSection";
import { GuestPicker } from "src/components/WebForm/components/GuestPicker/GuestPicker";
import { FItemName } from "src/components/WebForm/enums/FItemName";
import { AppLanguage } from "src/enums/AppLanguage";
import { getLocale } from "src/helpers/getLocale";
import classes from "./WebForm.module.scss";

const { RangePicker } = DatePicker;

export const WebForm = () => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const [category, setCategory] = useState("mobileHome");
  const accommodationTypeHasNextToSea = true;

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const renderExtraAccommodationFields = (
    fields: FormListFieldData[],
    { add, remove }: { add: () => void; remove: (id: number) => void }
  ) => {
    console.log(fields);
    return (
      <>
        {fields.map((field) => (
          <div key={field.key} className={classes.extraAccommodation}>
            <div className={classes.extraAccommodationHeader}>
              <h2>{`${t("extraAccommodation")} ${field.name + 1}`}</h2>
              <CloseSquareOutlined className={classes.close} onClick={() => remove(field.name)} />
            </div>
            <FItem label={t("accommodationType")} name={[field.name, FItemName.AccommodationType]}>
              <AccommodationTypePicker />
            </FItem>
            {accommodationTypeHasNextToSea ? (
              <FItem name={[field.name, FItemName.NextToSea]} valuePropName={"checked"}>
                <Checkbox>{t("nextToSea")}</Checkbox>
              </FItem>
            ) : null}
            <FItem label={t("personPicker.label")} name={[field.name, FItemName.GuestPicker]}>
              <GuestPicker />
            </FItem>
            <FItem name={[field.name, FItemName.Pet]} valuePropName={"checked"}>
              <Checkbox>{t("pet")}</Checkbox>
            </FItem>
            <FItem name={[field.name, FItemName.BoatRope]} valuePropName={"checked"}>
              <Checkbox>{t("boatRope")}</Checkbox>
            </FItem>
            <FItem name={[field.name, FItemName.BabyEquipment]} valuePropName={"checked"}>
              <Checkbox>{t("babyEquipment")}</Checkbox>
            </FItem>
          </div>
        ))}

        <Form.Item className={classes.addExtraAccommodation}>
          <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
            Add another accommodation
          </Button>
        </Form.Item>
      </>
    );
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

      <Form className={classes.form} layout={"vertical"} onFinish={handleSubmit} form={form}>
        <div className={classes.mainAccommodation}>
          <h2>{`${t("mainAccommodation")}`}</h2>
          <FItemRequired label={t("period")} name={FItemName.Period}>
            <RangePicker
              locale={getLocale(AppLanguage.HR)}
              format={"DD.MM.YYYY."}
              className={classes.rangePicker}
            />
          </FItemRequired>
          <FItemRequired label={t("accommodationType")} name={FItemName.AccommodationType}>
            <AccommodationTypePicker />
          </FItemRequired>
          {accommodationTypeHasNextToSea ? (
            <FItem name={FItemName.NextToSea} valuePropName={"checked"}>
              <Checkbox>{t("nextToSea")}</Checkbox>
            </FItem>
          ) : null}
          <FItemRequired label={t("personPicker.label")} name={FItemName.GuestPicker}>
            <GuestPicker />
          </FItemRequired>
          <FItem name={FItemName.Pet} valuePropName={"checked"}>
            <Checkbox>{t("pet")}</Checkbox>
          </FItem>
          <FItem name={FItemName.BoatRope} valuePropName={"checked"}>
            <Checkbox>{t("boatRope")}</Checkbox>
          </FItem>
          <FItem name={FItemName.BabyEquipment} valuePropName={"checked"}>
            <Checkbox>{t("babyEquipment")}</Checkbox>
          </FItem>
        </div>
        <Form.List name="extraAccommodations">{renderExtraAccommodationFields}</Form.List>
        <GuestInformationSection />
      </Form>
    </div>
  );
};
