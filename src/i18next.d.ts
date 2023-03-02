// import all namespaces (for the default language, only)
import type en from "./locales/en/translation.json";

declare module "i18next" {
  // and extend them!
  interface CustomTypeOptions {
    // custom resources type
    resources: {
      common: typeof en;
    };
  }
}
