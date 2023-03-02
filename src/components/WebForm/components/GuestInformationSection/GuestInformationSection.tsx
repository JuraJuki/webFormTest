import { Button } from "antd";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const GuestInformationSection: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Button htmlType={"submit"} type={"primary"}>
        {t("submitBtn")}
      </Button>
    </>
  );
};
