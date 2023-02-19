import house from "../images/house-icon-min.png";
import info from "../images/information-about-us-icon-17-min.png";
import doughnut from "../images/doughnut_transparent_w-min.png";
import wholesale from "../images/wholesale_transparent-min.png";
import contact from "../images/contact_us-min.png";
import "./dropdown.css";
export const DropDown = ({ showResults }) => {
  return (
    <>
      {showResults ? (
        <>
          <ul>
            <li className="navText">Home</li>
            <li>
              <img src={house} alt="home" width="50px" />
            </li>
          </ul>
          <ul>
            <li className="navText">About us</li>
            <li>
              <img src={info} alt="home" width="50em" />
            </li>
          </ul>
          <ul>
            <li className="navText">Doughnuts</li>
            <li>
              <img src={doughnut} alt="home" width="50em" />
            </li>
          </ul>
          <ul>
            <li className="navText">Wholesale</li>
            <li>
              <img src={wholesale} alt="home" width="50em" height="50em" />
            </li>
          </ul>
          <ul>
            <li className="navText">Contact us</li>
            <li>
              <img src={contact} alt="home" width="50em" height="50em" />
            </li>
          </ul>
        </>
      ) : null}
    </>
  );
};
