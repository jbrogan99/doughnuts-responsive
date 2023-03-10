import house from "../images/house-icon-min.png";
import info from "../images/information-about-us-icon-17-min.png";
import doughnut from "../images/doughnut_transparent_w-min.png";
import wholesale from "../images/wholesale_transparent-min.png";
import contact from "../images/contact_us-min.png";
import { Link } from "react-router-dom";
import "./dropdown.css";
export const DropDown = ({
  setShowResults,
  showResults,
  activePage,
  setActivePage,
}) => {
  const handleClick = (page) => {
    setActivePage(page);
    setShowResults(!showResults);
  };
  return (
    <>
      {showResults ? (
        <>
          <nav>
            <ul className="text-image-nav-container">
              <li
                className={`${
                  activePage === "home" ? "active-nav navText" : "navText"
                }`}
              >
                <Link to="/" onClick={() => handleClick("home")}>
                  Home
                </Link>
              </li>
              <li>
                <img src={house} alt="home" width="50px" />
              </li>
            </ul>
            <ul className="text-image-nav-container">
              <li
                className={`${
                  activePage === "about" ? "active-nav navText" : "navText"
                }`}
              >
                <Link to="/about" onClick={() => handleClick("about")}>
                  About us
                </Link>
              </li>
              <li>
                <img src={info} alt="home" width="50em" />
              </li>
            </ul>
            <ul className="text-image-nav-container">
              <li
                className={`${
                  activePage === "collection" ? "active-nav navText" : "navText"
                }`}
              >
                <Link
                  to="/collection"
                  onClick={() => handleClick("collection")}
                >
                  Doughnuts
                </Link>
              </li>
              <li>
                <img src={doughnut} alt="home" width="50em" />
              </li>
            </ul>
            <ul className="text-image-nav-container">
              <li
                className={`${
                  activePage === "stock" ? "active-nav navText" : "navText"
                }`}
              >
                <Link to="/stock" onClick={() => handleClick("stock")}>
                  Wholesale
                </Link>
              </li>
              <li>
                <img src={wholesale} alt="home" width="50em" height="50em" />
              </li>
            </ul>
            <ul className="text-image-nav-container">
              <li
                className={`${
                  activePage === "contact" ? "active-nav navText" : "navText"
                }`}
              >
                <Link to="/contact" onClick={() => handleClick("contact")}>
                  Contact us
                </Link>
              </li>
              <li>
                <img src={contact} alt="home" width="50em" height="50em" />
              </li>
            </ul>
          </nav>
        </>
      ) : null}
    </>
  );
};
