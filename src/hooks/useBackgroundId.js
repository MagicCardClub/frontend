import { useState } from "react";

export const useBackgroundId = (id) => {
  const [bgImage, setBgImage] = useState(id);

  const changeBackground = (value) => {
    setBgImage(value);
  };
  return [bgImage, changeBackground];
};
