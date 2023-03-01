import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const widgetDivs = document.querySelectorAll(".test_widget");
widgetDivs.forEach((divElement) => {
  const root = ReactDOM.createRoot(divElement);
  root.render(
    <React.StrictMode>
      <App divElement={divElement as HTMLDivElement} />
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
