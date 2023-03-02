import { createContext } from "react";
import { FormContextState } from "src/context/FormContext/FormContextState";

export const FormContext = createContext<FormContextState | undefined>({} as FormContextState);
