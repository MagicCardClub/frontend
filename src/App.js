import React, { useState } from "react";
import "styles/App.scss";
import Header from "components/Header/Header";
import Landing from "pages/Landing/Landing";
import Footer from "components/Footer/Footer";
import { landingCarousel as carousel } from "data/landingCarousel";

const App = () => {
  const [bgImage, setBgImage] = useState(0);

  const changeBackground = (imageId) => {
    setBgImage(imageId);
  };

  const {
    background,
    textColorone,
    textColortwo,
    headerButtonColor,
    headerIconBg,
    headerIconColor,
    headerBg,
  } = carousel[bgImage];

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        transitionDuration: 3,
        transitionProperty: "all",
        transitionTimingFunction: "ease-in-out",
      }}
    >
      <Header
        headerButtonColor={headerButtonColor}
        headerIconBg={headerIconBg}
        headerIconColor={headerIconColor}
        headerBg={headerBg}
      />
      <Landing
        carousel={carousel}
        changeBackground={changeBackground}
        textColorone={textColorone}
        textColortwo={textColortwo}
      />
      <Footer />
    </div>
  );
};

export default App;
