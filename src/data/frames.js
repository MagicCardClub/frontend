//mint frames
import mintxmas from "assets/frames/mintframes/xmas.png";
import mintcongrats from "assets/frames/mintframes/congrats.png";
import mintbirthday from "assets/frames/mintframes/birthday.png";
import minteaster from "assets/frames/mintframes/easter.png";
import minthalloween from "assets/frames/mintframes/halloween.png";
import mintgetwell from "assets/frames/mintframes/getwell.png";

//send frames
import sendxmas from "assets/frames/sendframes/xmas.png";
import sendcongrats from "assets/frames/sendframes/congrats.png";
import sendbirthday from "assets/frames/sendframes/birthday.png";
import sendeaster from "assets/frames/sendframes/easter.png";
import sendhalloween from "assets/frames/sendframes/halloween.png";
import sendgetwell from "assets/frames/sendframes/getwell.png";

const mintFrames = [
  { id: 0, frame: mintxmas, text: "xmas" },
  { id: 1, frame: mintcongrats, text: "congrats" },
  { id: 2, frame: mintbirthday, text: "birthday" },
  { id: 3, frame: minteaster, text: "easter" },
  { id: 4, frame: minthalloween, text: "halloween" },
  { id: 5, frame: mintgetwell, text: "getwell" },
];

const sendFrames = [
  { id: 0, frame: sendxmas, text: "xmas" },
  { id: 1, frame: sendcongrats, text: "congrats" },
  { id: 2, frame: sendbirthday, text: "birthday" },
  { id: 3, frame: sendeaster, text: "easter" },
  { id: 4, frame: sendhalloween, text: "halloween" },
  { id: 5, frame: sendgetwell, text: "getwell" },
];

export { mintFrames, sendFrames };
