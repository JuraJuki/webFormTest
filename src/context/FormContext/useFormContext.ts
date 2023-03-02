import { useContext } from "react";
import { FormContext } from "src/context/FormContext/FormContext";
import { FormContextState } from "src/context/FormContext/FormContextState";

export const useFormContext = (): FormContextState => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be within FormContextProvider");
  }

  return context;
};
