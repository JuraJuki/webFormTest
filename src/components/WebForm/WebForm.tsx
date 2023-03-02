import { Checkbox, DatePicker, Form, Radio, Select } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FItem } from "src/components/WebForm/components/FItem/FItem";
import classes from "./WebForm.module.scss";

const { RangePicker } = DatePicker;
const { Option } = Select;

export const WebForm = () => {
  const { t, i18n } = useTranslation();
  const [category, setCategory] = useState("mobileHome");
  const accommodationTypeHasNextToSea = true;

  //  const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <div className={classes.wrap}>
      <span>Kategorija smještaja</span>
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

      <Form className={classes.form} layout={"vertical"}>
        <FItem label={"Razdoblje"}>
          <RangePicker />
        </FItem>
        <FItem label={"Odaberite tip mobilne kućice"}>
          <Select style={{ width: "100%" }}>
            <Option key={"a"}>a</Option>
            <Option key={"b"}>b</Option>
          </Select>
        </FItem>
        {accommodationTypeHasNextToSea ? (
          <FItem>
            <Checkbox>Prvi red do mora</Checkbox>
          </FItem>
        ) : null}
        <FItem>
          <Select
            style={{ width: "100%" }}
            // special select with - +
          >
            <Option key={"adults"}>adults</Option>
            <Option key={"children"}>children</Option>
          </Select>
        </FItem>
        <FItem>
          <Checkbox>Kućni ljubimac</Checkbox>
        </FItem>
        <FItem>
          <Checkbox>Vez za brod</Checkbox>
        </FItem>
        <FItem>
          <Checkbox>
            7-dnevni najam dječje opreme (dječja kolica Monsters, stolica za bebu, dječji krevetić,
            kadica za kupanje)
          </Checkbox>
        </FItem>
      </Form>
    </div>
  );
};
