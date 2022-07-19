import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "styles/App.scss";
import Header from "components/Header/Header";
import Landing from "pages/Landing/Landing";
import EditCard from "pages/EditCard/EditCard";
import Send from "pages/Send/Send";
import Footer from "components/Footer/Footer";
import { landingCarousel as carousel } from "data/landingCarousel";

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [bgImage, setBgImage] = useState(0);

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
        handleConnected={handleConnected}
        isConnected={isConnected}
        headerButtonColor={headerButtonColor}
        headerIconBg={headerIconBg}
        headerIconColor={headerIconColor}
        headerBg={headerBg}
      />{" "}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                isConnected={isConnected}
                carousel={carousel}
                changeBackground={changeBackground}
                textColorone={textColorone}
                textColortwo={textColortwo}
                footerBg={footerBg}
              />
            }
          />{" "}
          <Route
            path="edit"
            element={
              <EditCard
                changeBackground={changeBackground}
                editButtonColor={headerButtonColor}
                editModalBg={footerBg}
                mintModalBg={mintModalBg}
              />
            }
          />{" "}
          <Route
            path="send"
            element={
              <Send
                sendButtonColor={headerButtonColor}
                sendModalBg={footerBg}
                unpackColor={headerButtonColor}
                sendFrame={bgImage}
              />
            }
          />{" "}
        </Routes>
      </Router>
      <Footer
        footerBg={footerBg}
        footerButtonColor={footerButtonColor}
        footerTextColor={footerTextColor}
        footerIconColor={footerIconColor}
        footerIconBg={footerIconBg}
      />{" "}
    </div>
  );
};

export default App;
