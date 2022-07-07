import React, { useState } from 'react'
import 'styles/App.scss'
import Header from 'components/Header/Header'
import Landing from 'pages/Landing/Landing'
import Footer from 'components/Footer/Footer'
import { landingCarousel as carousel } from 'data/landingCarousel'

const App = () => {
  const [bgImage, setBgImage] = useState(0)

<<<<<<< HEAD
  const changeBackground = (imageId) => {
    setBgImage(imageId)
  }
=======
  const changeBackground = (id) => {
    setBgImage(id);
  };
>>>>>>> 135da980111124c3f6f1d802e2ba9b5684196223

  const {
    background,
    textColorone,
    textColortwo,
    headerButtonColor,
    headerIconBg,
    headerIconColor,
    headerBg,
<<<<<<< HEAD
  } = carousel[bgImage]
=======
    footerBg,
    footerButtonColor,
    footerTextColor,
    footerIconBg,
    footerIconColor,
  } = carousel[bgImage];
>>>>>>> 135da980111124c3f6f1d802e2ba9b5684196223

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
        footerBg={footerBg}
      />
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
