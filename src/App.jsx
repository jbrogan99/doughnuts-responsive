import React from "react";
import { AboutUs } from ".//Application-routes/AboutUs";
import { StockOurStuff } from ".//Application-routes/StockOurStuff";
import { ContactUs } from ".//Application-routes/ContactUs";
import { Collection } from ".//Application-routes/Collection";
import { Home } from ".//Application-routes/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import "./css/styles.css"
import "./fonts/importedFonts.css";
function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<AboutUs />}/>
    <Route path="/collection" element={<Collection />}/>
    <Route path="/contact" element={<ContactUs />}/>  
    <Route path="/stock" element={<StockOurStuff />}/>
  </Routes>
</Router>
      
  );
}

export default App;
