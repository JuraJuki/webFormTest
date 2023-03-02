import { useEffect, useMemo } from "react";
import { useFormContext } from "src/context/FormContext/useFormContext";

export const useRootAttributes = (divElement: HTMLDivElement) => {
  const { setRootAttributes } = useFormContext();

  const divAttributes = useMemo(() => {
    return Array.from(divElement.attributes).map((attr) => {
      const newKey = attr.name.includes("data") ? attr.name.split("data-")[1] : attr.name;
      return { [newKey]: attr.value };
    });
  }, [divElement.attributes]);

  useEffect(() => {
    setRootAttributes(divAttributes);
  }, [setRootAttributes, divAttributes]);
};
