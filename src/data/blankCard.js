//Merry Christmas card
import xmasRed from "assets/images/blankCards/xmas/red.png";
// Congratulations cards
import congratsPurple from "assets/images/blankCards/congrats/purple.png";
import congratsOrange from "assets/images/blankCards/congrats/orange.png";
import congratsPink from "assets/images/blankCards/congrats/pink.png";
import congratsYellow from "assets/images/blankCards/congrats/yellow.png";
import congratsRed from "assets/images/blankCards/congrats/red.png";

export const blankCard = [
  {
    options: [{ id: 0, color: "red", image: xmasRed }],
    description: "Merry Christmas",
  },
  {
    options: [
      { id: 0, color: "purple", image: congratsPurple },
      { id: 1, color: "orange", image: congratsOrange },
      { id: 2, color: "pink", image: congratsPink },
      { id: 3, color: "red", image: congratsRed },
      { id: 4, color: "yellow", image: congratsYellow },
    ],
    description: "Congratulations",
  },
];
