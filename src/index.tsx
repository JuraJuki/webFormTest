import dayjs from "dayjs";
import "dayjs/locale/de";
import "dayjs/locale/en";
import "dayjs/locale/hr";
import "dayjs/locale/it";
import "dayjs/locale/sl";
import React from "react";
import ReactDOM from "react-dom/client";
import { FormContextProvider } from "src/context/FormContext/FormContextProvider";
import App from "./App";
import "./i18n";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

dayjs.locale("hr");

const widgetDivs = document.querySelectorAll(".swenWebForm");
widgetDivs.forEach((divElement) => {
  const root = ReactDOM.createRoot(divElement);
  root.render(
    <React.StrictMode>
      <FormContextProvider>
        <App divElement={divElement as HTMLDivElement} />
      </FormContextProvider>
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
