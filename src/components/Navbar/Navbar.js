import { Link } from "react-scroll";

import React from "react";
import "./Navbar.css";

function Navbar() {
  const [status, setStatus] = React.useState(false);
  const handleNavClick = () => {
    setStatus(!status);
  };

  return (
    <div className="nav">
      <div className="heading">
        <h2>
          <Link className="navParts font-bungee-shade" to="home">
            No Rage Quit
          </Link>
        </h2>
      </div>
      <div className="NavBar-desc">
        <Link className="navParts" to="home">
          HOME
        </Link>
        <Link className="navParts" to="about">
          ABOUT
        </Link>
        <Link className="navParts" to="prize">
          PRIZE
        </Link>
        <Link className="navParts" to="faq">
          FAQs
        </Link>
      </div>

      <div
        style={{ display: status ? "block" : "none" }}
        className="NavBar-description flex flex-col"
      >
        <Link className="navParts" to="home">
          HOME
        </Link>
        <br />
        <Link className="navParts" to="about">
          ABOUT
        </Link>
        <br />
        <Link className="navParts" to="prize">
          PRIZE
        </Link>
        <br />
        <Link className="navParts" to="faq">
          FAQs
        </Link>
        <br />
        <Link className="navParts" to="sponser">
          PARTNERS
        </Link>
        <br />
      </div>
    </div>
  );
}

export default Navbar;
