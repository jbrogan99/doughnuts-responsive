import React from "react";
import { useMediaQuery } from "react-responsive";
import { MobileHomePage } from "./mobile/MobileHomePage";
import { AboutUs } from "./mobile/AboutUs";
import { StockOurStuff } from "./mobile/StockOurStuff";
import { ContactUs } from "./mobile/ContactUs";
import "./fonts/importedFonts.css";
function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 391px)" });

  return <div>{isTabletOrMobile && <ContactUs />}</div>;
}

export default App;
