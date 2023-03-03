import { Radio } from "antd";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ParcelVehicleType } from "src/components/WebForm/components/ParcelVehiclePicker/enums/ParcelVehicleType";
import { ParcelVehiclePickerProps } from "src/components/WebForm/components/ParcelVehiclePicker/ParcelVehiclePickerProps";
import { ParcelVehicleSize } from "src/components/WebForm/components/ParcelVehiclePicker/ParcelVehicleSize/ParcelVehicleSize";
import classes from "./ParcelVehiclePicker.module.scss";

export const ParcelVehiclePicker = (props: ParcelVehiclePickerProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    // sets default state
    props.onChange?.(ParcelVehicleType.Camper);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderFormItemsPerType = () => {
    switch (props.value) {
      case ParcelVehicleType.Camper:
        return <ParcelVehicleSize key={ParcelVehicleType.Camper} />;
      case ParcelVehicleType.Caravan:
        return <ParcelVehicleSize key={ParcelVehicleType.Caravan} />;
      case ParcelVehicleType.Tent:
        return <ParcelVehicleSize key={ParcelVehicleType.Tent} />;
    }
  };

  return (
    <>
      <Radio.Group onChange={props.onChange} value={props.value}>
        <Radio className={classes.firstRadio} value={ParcelVehicleType.Camper}>
          {t("parcelVehiclePicker.Camper")}
        </Radio>
        <Radio className={classes.radio} value={ParcelVehicleType.Caravan}>
          {t("parcelVehiclePicker.Caravan")}
        </Radio>
        <Radio className={classes.radio} value={ParcelVehicleType.Tent}>
          {t("parcelVehiclePicker.Tent")}
        </Radio>
      </Radio.Group>
      {renderFormItemsPerType()}
    </>
  );
};
