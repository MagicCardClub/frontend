//xmas
import bgXmas from "assets/images/landing/xmas.png";
import xmas from "assets/images/templates/xmas.png";
//congrats
import bgCongrats from "assets/images/landing/congrats.png";
import congrats from "assets/images/templates/congrats.png";
//birthday
import bgBirthday from "assets/images/landing/birthday.png";
import birthday from "assets/images/templates/birthday.png";
//easter
import bgEaster from "assets/images/landing/easter.png";
import easter from "assets/images/templates/easter.png";
//halloween
import bgHalloween from "assets/images/landing/halloween.png";
import halloween from "assets/images/templates/halloween.png";
//getwell
import bgGetWell from "assets/images/landing/getwell.png";
import getwell from "assets/images/templates/getwell.png";

export const landingCarousel = [
  {
    id: 0,
    background: bgXmas,
    card: xmas,
    textColorone: "white",
    textColortwo: "red",
    headerTextColor: "white",
    headerButtonColor: "red",
    headerIconColor: "white",
    headerIconBg: "inherit",
    headerBg: "rgba(255, 255, 255, 0.24)",
    description: "Merry Christmas",
  },

  {
    id: 1,
    background: bgCongrats,
    card: congrats,
    textColorone: "white",
    textColortwo: "#C800E9",
    headerTextColor: "white",
    headerButtonColor: "#C800E9",
    headerIconColor: "white",
    headerIconBg: "#C800E9",
    headerBg: "rgba(255, 255, 255, 0.3)",
    description: "Congratulations",
  },

  {
    id: 2,
    background: bgBirthday,
    card: birthday,
    textColorone: "white",
    textColortwo: "#645555",
    headerTextColor: "white",
    headerButtonColor: "#645555",
    headerIconColor: "white",
    headerIconBg: "#645555",
    headerBg: "inherit",
    description: "Happy Birthday",
  },

  {
    id: 3,
    background: bgEaster,
    card: easter,
    textColorone: "white",
    textColortwo: "purple",
    headerTextColor: "white",
    headerButtonColor: "black",
    headerIconColor: "white",
    headerIconBg: "inherit",
    headerBg: "rgba(255, 255, 255, 0.2)",
    description: "Happy Easter",
  },
  {
    id: 4,
    background: bgHalloween,
    card: halloween,
    textColorone: "black",
    textColortwo: "orange",
    headerTextColor: "white",
    headerButtonColor: "orange",
    headerIconColor: "white",
    headerIconBg: "inherit",
    headerBg: "#414141",
    description: "Happy Halloween",
  },
  {
    id: 5,
    background: bgGetWell,
    card: getwell,
    textColorone: "black",
    textColortwo: "#1172E2",
    headerTextColor: "#1172E2",
    headerButtonColor: "#1172E2",
    headerIconColor: "white",
    headerIconBg: "#1172E2",
    headerBg: "#FF9DFF",
    description: "Happy Halloween",
  },
];
