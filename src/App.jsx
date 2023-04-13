import React, { useState } from "react";
import { AboutUs } from "./Application-routes/AboutUs";
import { StockOurStuff } from "./Application-routes/StockOurStuff";
import { ContactUs } from "./Application-routes/ContactUs";
import { Collection } from "./Application-routes/Collection";
import { Home } from "./Application-routes/Home";
import { Navigation } from "./navigation/navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/styles.css";
import "./fonts/importedFonts.css";

function App() {
  const [activePage, setActivePage] = useState("home");
  console.log("active page", activePage);
  return (
    <>
      {/*wrap components round routes enabling navigation*/}
      <Router>
        <header>
          <Navigation activePage={activePage} setActivePage={setActivePage} />
        </header>
        <Routes>
          <Route
            path="/" // set route path
            element={
              <Home activePage={activePage} setActivePage={setActivePage} /> // component to render on route path
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/stock" element={<StockOurStuff />} />
        </Routes>
      </Router>
    </>
  );
}

export default App; //export component
