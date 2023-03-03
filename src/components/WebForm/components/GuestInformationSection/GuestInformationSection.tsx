import { Button, DatePicker, Input, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { CountryPicker } from "src/components/WebForm/components/CountryPicker/CountryPicker";
import { FItem } from "src/components/WebForm/components/FItem/FItem";
import { FItemRequired } from "src/components/WebForm/components/FItem/FItemRequired";
import { FItemName } from "src/components/WebForm/enums/FItemName";
import classes from "./GuestInformationSection.module.scss";

const { Option } = Select;

export const GuestInformationSection: FC = () => {
  const { t } = useTranslation();

  const phonePrefixSelect = (
    <FItem name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </FItem>
  );

  return (
    <div className={classes.wrap}>
      <h2>{t("enterYourInformation")}</h2>
      <div className={classes.nameWrap}>
        <FItemRequired name={FItemName.FirstName} label={t("firstName")} short>
          <Input />
        </FItemRequired>
        <FItemRequired name={FItemName.LastName} label={t("lastName")} short>
          <Input />
        </FItemRequired>
      </div>
      <FItemRequired name={FItemName.Email} label={t("email")} short>
        <Input type={"email"} />
      </FItemRequired>
      <FItemRequired name={FItemName.Birthday} label={t("birthday")} short>
        <DatePicker />
      </FItemRequired>
      <FItemRequired name={FItemName.Country} label={t("country")} short>
        <CountryPicker />
      </FItemRequired>
      <FItemRequired name={FItemName.PhoneNumber} label={t("phoneNumber")} short>
        <Input addonBefore={phonePrefixSelect} />
      </FItemRequired>
      <FItem name={FItemName.Note} label={t("note")}>
        <TextArea />
      </FItem>
      <Button htmlType={"submit"} type={"primary"}>
        {t("submitBtn")}
      </Button>
    </div>
  );
};
