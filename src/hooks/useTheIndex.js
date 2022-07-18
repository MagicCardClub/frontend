import { useState } from "react";

export const useTheIndex = (initialNumber) => {
  const [theIndex, setTheIndex] = useState();

  const setIndex = (value) => {};

  return [theIndex, setIndex];
};
