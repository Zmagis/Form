import React from "react";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";

import DrawerToggle from "./DrawerToggle";

const Nav = props => {
  return (
    <div className="navigation-container">
      <DrawerToggle click={props.click} />
      {!props.show ? (
        ""
      ) : (
        <div className="links">
          <Fade left delay={100} duration={400}>
            <div className="link">
              <NavLink to="/" exact onClick={props.clickLink}>
                Home
              </NavLink>
            </div>
          </Fade>
          <Fade left delay={400} duration={400}>
            <div className="link" onClick={props.clickLink}>
              <NavLink to="/fill-form">Form</NavLink>
            </div>
          </Fade>
          <Fade left delay={700} duration={400}>
            <div className="link" onClick={props.clickLink}>
              <NavLink to="/questions">Questions</NavLink>
            </div>
          </Fade>
        </div>
      )}
    </div>
  );
};

export default Nav;
