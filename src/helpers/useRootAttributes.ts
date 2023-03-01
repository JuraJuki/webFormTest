import { useEffect, useState } from "react";
import { KeyValueStringPair } from "src/interfaces/KeyValueStringPair";

export const useRootAttributes = (divElement: HTMLDivElement) => {
  const [attributes, setAttributes] = useState<KeyValueStringPair[]>();
  useEffect(() => {
    const divAttributes = Array.from(divElement.attributes).map((attr) => {
      const newKey = attr.name.includes("data")
        ? attr.name.split("data-")[1]
        : attr.name;
      return { [newKey]: attr.value };
    });
    setAttributes(divAttributes);
  }, [divElement.attributes]);

  return attributes;
};
