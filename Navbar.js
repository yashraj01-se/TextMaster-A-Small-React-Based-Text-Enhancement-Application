import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} navbar-${props.modeb} bg-${props.modeb}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.AboutText}
                </Link>
              </li>
            </ul>
            {/* <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={()=>props.togglemode('primary')}style={{height:'30px', width:'30px',cursor:"pointer"}}></div>
            </div> (for pallet) */ }
            

            {/* Bluish Mode */}
            <div
              className={`form-check form-switch me-8 text-${props.mode === "light" ? "dark" : "light"} `}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                checked={props.mode === "dark"} // Check if Bluish Mode is on (dark mode)
                onChange={() => {
                  // Toggle Bluish Mode
                  props.togglemode();
                  // Ensure Blackish Mode is turned off when Bluish Mode is toggled
                  if (props.modeb === "dark") {
                    props.togglemodeblackish(); // Turn off Blackish Mode if it's on
                  }
                }}
                id="flexSwitchCheckBluish"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckBluish"
              >
                Bluish Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  AboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired, // Add validation for mode
  modeb: PropTypes.string.isRequired, // Add validation for modeb
  togglemode: PropTypes.func.isRequired, // Add validation for togglemode function
  togglemodeblackish: PropTypes.func.isRequired, // Add validation for togglemodeblackish function
};

Navbar.defaultProps = {
  title: "set title here",
  AboutText: "set here",
};
