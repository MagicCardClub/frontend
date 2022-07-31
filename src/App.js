import React, { useState } from "react";

import "styles/App.scss";

import starone from "assets/images/stars/star-one.png";
import startwo from "assets/images/stars/star-two.png";
import starthree from "assets/images/stars/star-three.png";
import starfour from "assets/images/stars/star-four.png";

import Header from "components/Header/Header";
import AllRoutes from "Routes/AllRoutes";
import Footer from "components/Footer/Footer";
import { useBackgroundId } from "hooks/useBackgroundId";

import { landingCarousel as carousel } from "data/landingCarousel";

const App = () => {
  const [isConnected, setIsConnected] = useState(false);

  const [bgImage, setBgImage] = useBackgroundId(0);

  const handleConnected = () => {
    setIsConnected((prev) => !prev);
  };

  const changeBackground = (id) => {
    setBgImage(id);
  };

  const {
    background,
    textColorone,
    textColortwo,
    headerButtonColor,
    headerIconBg,
    headerIconColor,
    headerBg,
    footerBg,
    footerButtonColor,
    footerTextColor,
    footerIconBg,
    footerIconColor,
    mintModalBg,
  } = carousel[bgImage];

  const otherProps = {
    isConnected,
    handleConnected,
    changeBackground,
    mintModalBg,
    bgImage,
    textColorone,
    textColortwo,
  };

  const headerProps = {
    headerButtonColor,
    headerIconBg,
    headerIconColor,
    headerBg,
  };

  const footerProps = {
    footerBg,
    footerButtonColor,
    footerTextColor,
    footerIconBg,
    footerIconColor,
  };

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
      <Header otherProps={otherProps} headerProps={headerProps} />
      <img src={starone} alt="star" className="starone" />
      <img src={startwo} alt="star" className="startwo" />
      <img src={starthree} alt="star" className="starthree" />
      <img src={starfour} alt="star" className="starfour" />

      <AllRoutes
        carousel={carousel}
        headerProps={headerProps}
        footerProps={footerProps}
        otherProps={otherProps}
      />

      <Footer footerProps={footerProps} />
    </div>
  );
};

export default App;
