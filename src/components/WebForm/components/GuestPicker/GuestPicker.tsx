import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Select, Tag } from "antd";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Guest } from "src/components/WebForm/components/GuestPicker/Guest";
import { GuestPickerProps } from "src/components/WebForm/components/GuestPicker/GuestPickerProps";
import classes from "./GuestPicker.module.scss";

export interface GuestServices {
  [Guest.Adult]: { name?: string; quantity: number };
  [Guest.Child02]: { name?: string; quantity: number };
  [Guest.Child35]: { name?: string; quantity: number };
  [Guest.Child611]: { name?: string; quantity: number };
  [Guest.Senior]: { name?: string; quantity: number };
}

// the props are passed down by FormItem component
export const GuestPicker = ({ value = "", onChange }: GuestPickerProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const [currValue, setCurrValue] = useState<GuestServices>({
    [Guest.Adult]: { name: t("personPicker.adults"), quantity: 2 },
    [Guest.Child02]: { name: t("personPicker.children"), quantity: 0 },
    [Guest.Child35]: { name: t("personPicker.children"), quantity: 0 },
    [Guest.Child611]: { name: t("personPicker.children"), quantity: 0 },
    [Guest.Senior]: { name: t("personPicker.seniors"), quantity: 0 },
  });

  const totalQuantity = useMemo(() => {
    return (
      currValue[Guest.Adult].quantity +
      currValue[Guest.Child02].quantity +
      currValue[Guest.Child35].quantity +
      currValue[Guest.Child611].quantity +
      currValue[Guest.Senior].quantity
    );
  }, [currValue]);

  useEffect(() => {
    onChange?.(currValue);
    // eslint-disable-next-line
  }, []);

  const handleUpdateCurrValue = (key: Guest, quantity: number) => {
    const newObj = { ...currValue, [key]: { name: currValue?.[key]?.name, quantity } };
    onChange?.(newObj);
    setCurrValue(newObj);
  };

  const getIsDecrementDisabled = (quantity: number) => {
    if (totalQuantity === 1) return true;
    return Boolean(0 && quantity <= 0) || quantity <= 0;
  };

  const getIsIncrementDisabled = (quantity: number) => {
    return Boolean(20 && quantity >= 20) || quantity >= 20;
  };

  const renderPlaceholder = () => {
    const adults = (
      <Tag color={"green"}>
        {currValue[Guest.Adult].name}: {currValue[Guest.Adult].quantity}
      </Tag>
    );
    const allChildrenCount =
      currValue[Guest.Child02].quantity +
      currValue[Guest.Child35].quantity +
      currValue[Guest.Child611].quantity;

    const children = (
      <Tag color={"green"}>
        {t("personPicker.children")}: {allChildrenCount}
      </Tag>
    );
    const seniors = (
      <Tag color={"green"}>
        {currValue[Guest.Senior].name}: {currValue[Guest.Senior].quantity}
      </Tag>
    );
    return (
      <div>
        {adults}
        {children}
        {seniors}
      </div>
    );
  };

  const getSelectOptions = () => {
    const guestChoices = Object.values(Guest);
    const guestName = (guest: Guest) => {
      switch (guest) {
        case Guest.Adult:
          return t("personPicker.adults");
        case Guest.Child02:
          return `${t("personPicker.children")} 0-2`;
        case Guest.Child35:
          return `${t("personPicker.children")} 3-5`;
        case Guest.Child611:
          return `${t("personPicker.children")} 6-11`;
        case Guest.Senior:
          return t("personPicker.seniors");
      }
    };

    return guestChoices.map((guest) => {
      const quantity = currValue[guest].quantity;

      const isDecrementDisabled = getIsDecrementDisabled(quantity);
      const isIncrementDisabled = getIsIncrementDisabled(quantity);

      return {
        key: guest,
        value: 0,
        title: guestName(guest),
        guestName,
        quantity,
        label: (
          <li className={classes.option}>
            <span>{guestName(guest)}</span>
            <div className={classes.counter}>
              <button
                className={
                  isDecrementDisabled ? classes.btnDisabledDecrement : classes?.btnDecrement
                }
                onClick={(e) => {
                  e.preventDefault();
                  if (!isDecrementDisabled) handleUpdateCurrValue(guest, quantity - 1);
                }}
              >
                <MinusOutlined />
              </button>
              <span className={classes.quantity}>{quantity}</span>
              <button
                className={
                  isIncrementDisabled ? classes.btnDisabledIncrement : classes?.btnIncrement
                }
                onClick={(e) => {
                  e.preventDefault();
                  if (!isIncrementDisabled) handleUpdateCurrValue(guest, quantity + 1);
                }}
              >
                <PlusOutlined />
              </button>
            </div>
          </li>
        ),
      };
    });
  };
  return (
    <Select
      className={classes.select}
      options={getSelectOptions()}
      open={open}
      placeholder={renderPlaceholder()}
      onClick={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onSelect={() => {
        // to prevent collapse if clicked
        return null;
      }}
      value={null}
    />
  );
};
