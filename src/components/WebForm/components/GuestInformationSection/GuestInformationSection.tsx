import { Button, DatePicker, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { FItem } from "src/components/WebForm/components/FItem/FItem";
import { FItemRequired } from "src/components/WebForm/components/FItem/FItemRequired";
import { FItemName } from "src/components/WebForm/enums/FItemName";
import classes from "./GuestInformationSection.module.scss";

export const GuestInformationSection: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.wrap}>
      <h2>{t("enterYourInformation")}</h2>
      <div className={classes.nameWrap}>
        <FItemRequired
          name={FItemName.FirstName}
          label={t("firstName")}
          style={{ width: "50%" }}
          rules={[{ required: true, message: t("mandatoryField") }]}
        >
          <Input />
        </FItemRequired>
        <FItemRequired
          name={FItemName.LastName}
          label={t("lastName")}
          style={{ width: "50%" }}
          rules={[{ required: true, message: t("mandatoryField") }]}
        >
          <Input />
        </FItemRequired>
      </div>
      <FItemRequired
        name={FItemName.Email}
        label={t("email")}
        rules={[{ required: true, message: t("mandatoryField") }]}
      >
        <Input type={"email"} />
      </FItemRequired>
      <FItemRequired
        name={FItemName.Birthday}
        label={t("birthday")}
        rules={[{ required: true, message: t("mandatoryField") }]}
      >
        <DatePicker style={{ width: "50%" }} />
      </FItemRequired>
      <FItemRequired
        name={FItemName.Country}
        label={t("country")}
        rules={[{ required: true, message: t("mandatoryField") }]}
      >
        <Input />
      </FItemRequired>
      <FItemRequired
        name={FItemName.PhoneNumber}
        label={t("phoneNumber")}
        rules={[{ required: true, message: t("mandatoryField") }]}
      >
        <Input />
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
