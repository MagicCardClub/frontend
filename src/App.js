import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

<<<<<<< HEAD
import 'styles/App.scss'
import Header from 'components/Header/Header'
import Landing from 'pages/Landing/Landing'
import EditCard from 'pages/EditCard/EditCard'
import Mint from 'pages/Mint/Mint'
import Send from 'pages/Send/Send'
import Footer from 'components/Footer/Footer'
import { landingCarousel as carousel } from 'data/landingCarousel'
=======
import "styles/App.scss";
import Header from "components/Header/Header";
import Landing from "pages/Landing/Landing";
import EditCard from "pages/EditCard/EditCard";
import Send from "pages/Send/Send";
import Footer from "components/Footer/Footer";
import { landingCarousel as carousel } from "data/landingCarousel";
>>>>>>> 18a5632d7da7acbff02258a865df05e38b5eb8b8

const App = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [bgImage, setBgImage] = useState(0)

  const handleConnected = () => {
    setIsConnected((prev) => !prev)
  }

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
            path='/'
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
            path='edit'
            element={
              <EditCard
                changeBackground={changeBackground}
                editButtonColor={headerButtonColor}
                editModalBg={footerBg}
              />
            }
          />
<<<<<<< HEAD
          <Route
            path='mint'
            element={
              <Mint
                mintButtonColor={headerButtonColor}
                mintModalBg={footerBg}
              />
            }
          />
=======

>>>>>>> 18a5632d7da7acbff02258a865df05e38b5eb8b8
          <Route
            path='send'
            element={
              <Send
                sendButtonColor={headerButtonColor}
                sendModalBg={footerBg}
                unpackColor={headerButtonColor}
                sendFrames={bgImage}
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
