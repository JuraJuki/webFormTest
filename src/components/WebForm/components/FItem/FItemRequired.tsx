import FormItem from "antd/lib/form/FormItem";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { FItemProps } from "src/components/WebForm/components/FItem/FItemProps";
import classes from "./FItem.module.scss";

export const FItemRequired = (props: FItemProps) => {
  const { t } = useTranslation();

  const { className, ...rest } = props;
  return (
    <FormItem
      labelAlign={"left"}
      className={classNames(classes.formItemExtended, className)}
      rules={[{ required: true, message: t("mandatoryField") }]}
      {...rest}
    >
      {props.children}
    </FormItem>
  );
};
