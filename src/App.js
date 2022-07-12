<<<<<<< HEAD
import React, { useState } from 'react'
import 'styles/App.scss'
import Header from 'components/Header/Header'
import Landing from 'pages/Landing/Landing'
import Footer from 'components/Footer/Footer'
import { landingCarousel as carousel } from 'data/landingCarousel'

const App = () => {
  const [bgImage, setBgImage] = useState(0)
=======
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "styles/App.scss";
import Header from "components/Header/Header";
import Landing from "pages/Landing/Landing";
import EditCard from "pages/EditCard/EditCard";
import Mint from "pages/Mint/Mint";
import Send from "pages/Send/Send";
import Footer from "components/Footer/Footer";
import { landingCarousel as carousel } from "data/landingCarousel";

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [bgImage, setBgImage] = useState(0);
>>>>>>> 3dcafe657b57d6acf8570045791bb810d71917c0

  const handleConnected = () => {
    setIsConnected((prev) => !prev);
  };

  const changeBackground = (id) => {
    setBgImage(id)
  }

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
  } = carousel[bgImage]

  return (
    <div
      className='App'
      style={{
        backgroundImage: `url(${background})`,
        transitionDuration: 3,
        transitionProperty: 'all',
        transitionTimingFunction: 'ease-in-out',
      }}
    >
      <Header
        handleConnected={handleConnected}
        isConnected={isConnected}
        headerButtonColor={headerButtonColor}
        headerIconBg={headerIconBg}
        headerIconColor={headerIconColor}
        headerBg={headerBg}
      />
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
          />
          <Route
            path="edit"
            element={
              <EditCard
                changeBackground={changeBackground}
                editButtonColor={headerButtonColor}
                editModalBg={footerBg}
              />
            }
          />
          <Route
            path="mint"
            element={
              <Mint
                mintButtonColor={headerButtonColor}
                mintModalBg={footerBg}
              />
            }
          />
          <Route
            path="send"
            element={
              <Send
                sendButtonColor={headerButtonColor}
                sendModalBg={footerBg}
              />
            }
          />
        </Routes>
      </Router>

      <Footer
        footerBg={footerBg}
        footerButtonColor={footerButtonColor}
        footerTextColor={footerTextColor}
        footerIconColor={footerIconColor}
        footerIconBg={footerIconBg}
      />
    </div>
  )
}

export default App
