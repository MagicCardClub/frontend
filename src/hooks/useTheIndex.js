import { useState } from "react";

export const useTheIndex = (initialNumber) => {
  const [index, setIndex] = useState(() => {
    if (typeof window === "undefined") {
      return initialNumber;
    }
  });

  const useIndex = (value) => {
    try {
      const indexToSet = value;
      if (typeof indexToSet === "number" || indexToSet !== null) {
        setIndex(indexToSet);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [index, useIndex];
};
