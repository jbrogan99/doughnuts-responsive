import React from "react";
import { useMediaQuery } from "react-responsive";
import { MobileHomePage } from "./mobile/MobileHomePage";
import "./fonts/importedFonts.css";
function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 391px)" });

  return <div>{isTabletOrMobile && <MobileHomePage />}</div>;
}

export default App;
