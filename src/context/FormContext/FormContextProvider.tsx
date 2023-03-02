import { useState } from "react";
import { FormContext } from "src/context/FormContext/FormContext";
import { FormContextProps } from "src/context/FormContext/interfaces/FormContextProps";
import { KeyValueStringPair } from "src/interfaces/KeyValueStringPair";

export const FormContextProvider = (props: FormContextProps) => {
  const [rootAttributes, setRootAttributes] = useState<KeyValueStringPair[]>([]);

  return (
    <FormContext.Provider value={{ rootAttributes, setRootAttributes }}>
      {props.children}
    </FormContext.Provider>
  );
};
