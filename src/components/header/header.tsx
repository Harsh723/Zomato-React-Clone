import React, { Suspense } from "react";
import SimpleBackdrop from "../login-signup/backdrop";
//import CommonLogin from "../login-signup/CommonLogin";
import "./style.css";

const CommonLogin = React.lazy(() => import("../login-signup/CommonLogin"));

function Header() {
  return (
    <div className="header">
      <div className="mobile">
        <SimpleBackdrop />
      </div>
      <div className="largeScreen">
        <Suspense fallback={<div>Loading...</div>}>
          <CommonLogin display={false} onClick={() => {}} />
        </Suspense>
      </div>
    </div>
  );
}

export default Header;
