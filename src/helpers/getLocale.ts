import { PickerLocale } from "antd/lib/date-picker/generatePicker";
import de_DE from "antd/lib/date-picker/locale/de_DE";
import en_GB from "antd/lib/date-picker/locale/en_GB";
import hr_HR from "antd/lib/date-picker/locale/hr_HR";
import it_IT from "antd/lib/date-picker/locale/it_IT";
import sl_SL from "antd/lib/date-picker/locale/sl_SI";
import { AppLanguage } from "src/enums/AppLanguage";

export const getLocale = (currentLanguage: AppLanguage): PickerLocale => {
  switch (currentLanguage) {
    case AppLanguage.HR:
      return hr_HR;
    case AppLanguage.EN:
      return en_GB;
    case AppLanguage.IT:
      return it_IT;
    case AppLanguage.DE:
      return de_DE;
    case AppLanguage.SL:
      return sl_SL;
  }
};
