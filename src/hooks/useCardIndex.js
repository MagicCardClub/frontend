import { useState } from "react";

export const useCardIndex = (index) => {
  const [cardIndex, setCardIndex] = useState(() => {
    if (index === "undefined" || index === null) {
      return 0;
    }
  });

  const setIndex = (indexToSet) => {
    try {
      setCardIndex(indexToSet);
      if (typeof indexToSet !== "number") {
        setCardIndex(0);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [cardIndex, setIndex];
};
