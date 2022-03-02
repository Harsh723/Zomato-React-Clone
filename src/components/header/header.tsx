import React from "react";
import SimpleBackdrop from "../login-signup/backdrop";
import CommonLogin from "../login-signup/CommonLogin";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <div className="mobile">
        <SimpleBackdrop />
      </div>
      <div className="largeScreen">
        <CommonLogin display={false} />
      </div>
    </div>
  );
}

export default Header;
