import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import CenteredModal from "../modal/CenteredModal";

type LoginSignUp = {
  login: boolean;
  signUp: boolean;
};

type CommonLoginType = {
  display: boolean;
  onClick: () => void;
};

const CommonLogin = ({ display, onClick }: CommonLoginType) => {
  const [modalShow, setModalShow] = useState<LoginSignUp>({} as LoginSignUp);

  const handleLoginSignup = (value: string) => {
    if (display) onClick();
    if (value === "Login") {
      setModalShow({ login: true, signUp: false });
    } else {
      setModalShow({ login: false, signUp: true });
    }
  };

  const handleClose = () => {
    setModalShow({ login: false, signUp: false });
  };

  const toggleModal = (value: boolean) => {
    if (value) setModalShow({ login: false, signUp: true });
    else setModalShow({ login: true, signUp: false });
  };

  return (
    <>
      <div className={display ? "small" : ""}>
        <Stack spacing={2} direction="row">
          <Button
            variant="text"
            color="secondary"
            onClick={() => handleLoginSignup("Login")}
          >
            <p style={{ fontSize: "2rem" }}>Log in</p>
          </Button>
          <Button
            variant="text"
            color="secondary"
            onClick={() => handleLoginSignup("Signup")}
          >
            <p style={{ fontSize: "2rem" }}>Sign up</p>
          </Button>
        </Stack>
      </div>
      <CenteredModal
        show={modalShow.login || modalShow.signUp}
        onHide={handleClose}
        showModal={modalShow}
        toggle={toggleModal}
      />
    </>
  );
};

export default CommonLogin;
