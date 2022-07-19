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
    headerIconBg: "rgba(255, 255, 255, 0.4)",
    headerBg: "rgba(255, 255, 255, 0.24)",
    description: "Merry Christmas",
    footerBg: "rgba(88, 137, 196, 1)",
    footerTextColor: "white",
    footerButtonColor: "red",
    footerIconColor: "white",
    footerIconBg: "rgba(217, 217, 217, 0.24)",
    mintModalBg: "rgba(88, 137, 196, 0.85)",
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
    headerBg: "rgba(255, 255, 255, 0.49)",
    description: "Congratulations",
    footerBg: "#12B3C6",
    footerTextColor: "white",
    footerButtonColor: "#C800E9",
    footerIconColor: "#C800E9",
    footerIconBg: "white",
    mintModalBg: "rgba(18, 179, 198, 0.85)",
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
    headerBg: "rgba(115, 42, 10, 0.3)",
    description: "Happy Birthday",
    footerBg: "#D7C0B6",
    footerTextColor: "#white",
    footerButtonColor: "#645555",
    footerIconColor: "white",
    footerIconBg: "#645555",
    mintModalBg: "rgba(215, 192, 18, 0.85)",
  },

  {
    id: 3,
    background: bgEaster,
    card: easter,
    textColorone: "white",
    textColortwo: "rgb(191, 64, 191)",
    headerTextColor: "white",
    headerButtonColor: "black",
    headerIconColor: "white",
    headerIconBg: "rgba(255, 255, 255, 0.4)",
    headerBg: "rgba(255, 255, 255, 0.2)",
    description: "Happy Easter",
    footerBg: "#0D182C",
    footerTextColor: "white",
    footerButtonColor: "rgba(128,0,128, 0.7)",
    footerIconColor: "white",
    footerIconBg: "rgba(255, 255, 255, 0.2)",
    mintModalBg: "rgba(13, 24, 44, 0.85)",
  },
  {
    id: 4,
    background: bgHalloween,
    card: halloween,
    textColorone: "black",
    textColortwo: "rgba(237, 115, 33, 1)",
    headerTextColor: "white",
    headerButtonColor: "rgba(237, 115, 33, 1)",
    headerIconColor: "white",
    headerIconBg: "rgba(255, 255, 255, 0.2)",
    headerBg: "rgba(65, 65, 65, 1)",
    description: "Happy Halloween",
    footerBg: "#191B1B",
    footerTextColor: "white",
    footerButtonColor: "rgba(237, 115, 33, 1)",
    footerIconColor: "white",
    footerIconBg: "rgba(255, 255, 255, 0.2)",
    mintModalBg: "rgba(25, 27, 27, 0.85)",
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
    footerBg: "#FF9DFF",
    footerTextColor: "#1172E2",
    footerButtonColor: "#1172E2",
    footerIconColor: "white",
    footerIconBg: "#1172E2",
    mintModalBg: "rgba(255, 157, 255, 0.85)",
  },
];
