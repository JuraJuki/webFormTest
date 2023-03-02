import FormItem from "antd/lib/form/FormItem";
import { FItemProps } from "src/components/WebForm/components/FItem/FItemProps";

export const FItem = (props: FItemProps) => {
  const { a, ...rest } = props;
  return (
    <FormItem labelAlign={"left"} {...rest}>
      {props.children}
    </FormItem>
  );
};
