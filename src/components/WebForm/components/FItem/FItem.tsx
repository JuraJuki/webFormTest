import FormItem from "antd/lib/form/FormItem";
import classNames from "classnames";
import { FItemProps } from "src/components/WebForm/components/FItem/FItemProps";
import classes from "./FItem.module.scss"

export const FItem = (props: FItemProps) => {
  const { className, ...rest } = props;
  return (
    <FormItem
      labelAlign={"left"}
      className={classNames(classes.formItemExtended, className)}
      {...rest}
    >
      {props.children}
    </FormItem>
  );
};
