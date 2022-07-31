import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "pages/Landing/Landing";
import EditCard from "pages/EditCard/EditCard";
import Send from "pages/Send/Send";
import Collections from "pages/Collections/Collections";
import Error from "pages/Error/Error";

const AllRoutes = (props) => {
  const { carousel, headerProps, footerProps, otherProps, bgImage } = props;

  const { headerButtonColor } = headerProps;
  const { footerBg } = footerProps;

  const {
    isConnected,
    changeBackground,
    textColorone,
    textColortwo,
    mintModalBg,
  } = otherProps;

  return (
    <React.Fragment>
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
                sendModalBg={mintModalBg}
                unpackColor={headerButtonColor}
                sendFrameId={bgImage}
              />
            }
          />
          <Route
            path="collections"
            element={
              <Collections
                iconButtonColor={headerButtonColor}
                collectionModalBg={mintModalBg}
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default AllRoutes;
