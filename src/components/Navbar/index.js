import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav className="navbar container-fluid navbar-expand-lg navbar-light bg-light">
      <div className="row" style={{width:"100%"}}>
        <div className ="col-4">
        <a className="navbar-brand" href="#">Clicky Game</a>
        </div>
        <div className ="col-4 navbar-brand mr-0">
         {props.message}
        </div>
        <div className ="col-4 navbar-brand mr-0">
          Score {props.score}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
