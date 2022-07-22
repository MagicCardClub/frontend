//Merry Christmas card
import xmasRed from "assets/images/blankCards/xmas/red.png";
// Congratulations cards
import congratsPurple from "assets/images/blankCards/congrats/purple.png";
import congratsOrange from "assets/images/blankCards/congrats/orange.png";
import congratsPink from "assets/images/blankCards/congrats/pink.png";
import congratsYellow from "assets/images/blankCards/congrats/yellow.png";
import congratsRed from "assets/images/blankCards/congrats/red.png";
//Birthday cards
import birthdayyellow from "assets/images/blankCards/birthday/yellow.png";
import birthdayblue from "assets/images/blankCards/birthday/blue.png";
import birthdaypink from "assets/images/blankCards/birthday/pink.png";
import birthdaypurple from "assets/images/blankCards/birthday/purple.png";
import birthdayred from "assets/images/blankCards/birthday/red.png";
//Easter cards
import easterblue from "assets/images/blankCards/easter/blue.png";
import easterpink from "assets/images/blankCards/easter/pink.png";
import easterred from "assets/images/blankCards/easter/red.png";

//Halloween cards
import halloweenblue from "assets/images/blankCards/halloween/blue.png";
import halloweenorange from "assets/images/blankCards/halloween/orange.png";
//Get Well Soon
import getwellpink from "assets/images/blankCards/getwell/pink.png";
import getwellred from "assets/images/blankCards/getwell/red.png";
import getwellyellow from "assets/images/blankCards/getwell/yellow.png";
import getwellblue from "assets/images/blankCards/getwell/blue.png";

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
  {
    options: [
      { id: 0, color: "yellow", image: birthdayyellow },
      { id: 1, color: "blue", image: birthdayblue },
      { id: 2, color: "pink", image: birthdaypink },
      { id: 3, color: "purple", image: birthdaypurple },
      { id: 4, color: "red", image: birthdayred },
    ],
    description: "Happy Birthday",
  },
  {
    options: [
      { id: 0, color: "blue", image: easterblue },
      { id: 1, color: "pink", image: easterpink },
      { id: 2, color: "red", image: easterred },
    ],
    description: "Happy Easter",
  },
  {
    options: [
      { id: 0, color: "orange", image: halloweenorange },
      { id: 1, color: "blue", image: halloweenblue },
    ],
    description: "Happy Halloween",
  },
  {
    options: [
      { id: 0, color: "pink", image: getwellpink },
      { id: 1, color: "red", image: getwellred },
      { id: 0, color: "yellow", image: getwellyellow },
      { id: 1, color: "blue", image: getwellblue },
    ],
    description: "Get Well Soon",
  },
];
