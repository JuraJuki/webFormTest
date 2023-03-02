import { Dispatch, SetStateAction } from "react";
import { KeyValueStringPair } from "src/interfaces/KeyValueStringPair";

export interface FormContextState {
  rootAttributes: KeyValueStringPair[];
  setRootAttributes: Dispatch<SetStateAction<KeyValueStringPair[]>>;
}
