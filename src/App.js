<<<<<<< HEAD
import React, { useState } from 'react'
import 'styles/App.scss'
import Header from 'components/Header/Header'
import Landing from 'pages/Landing/Landing'
import Footer from 'components/Footer/Footer'
import { landingCarousel } from 'data/landingCarousel'

const App = () => {
  const [carousel, setCarousel] = useState(landingCarousel)
  const [bgImage, setBgImage] = useState(0)
=======
import React, { useState } from "react";
import "styles/App.scss";
import Header from "components/Header/Header";
import Landing from "pages/Landing/Landing";
import Footer from "components/Footer/Footer";
import { landingCarousel as carousel } from "data/landingCarousel";

const App = () => {
  const [bgImage, setBgImage] = useState(0);
>>>>>>> 00dba05bf962e699aa1d71201697c730216258a5

  const changeBackground = (imageId) => {
    setBgImage(imageId)
  }

  const {
    background,
    textColorone,
    textColortwo,
    headerButtonColor,
    headerIconBg,
    headerIconColor,
    headerBg,
  } = carousel[bgImage]

  return (
    <div
<<<<<<< HEAD
      className='App'
      style={{ backgroundImage: `url(${background})`, transitionDuration: 3 }}
=======
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        transitionDuration: 3,
        transitionProperty: "all",
        transitionTimingFunction: "ease-in-out",
      }}
>>>>>>> 00dba05bf962e699aa1d71201697c730216258a5
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
  )
}

export default App
