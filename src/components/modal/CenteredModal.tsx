import React from "react";
import { Modal } from "react-bootstrap";
import Button from "@mui/material/Button";

type FooterModal = {
  login: boolean;
  signUp: boolean;
};

interface ICenteredModal {
  show: boolean;
  onHide: () => void;
  showModal: FooterModal;
  toggle: (input: boolean) => void;
}

function CenteredModal({ show, onHide, showModal, toggle }: ICenteredModal) {
  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer style={{ display: "flex", justifyContent: "flex-start" }}>
        <LoginFooter
          text={showModal.login ? "New to Zomato?" : "Already have an account?"}
          link={showModal.login ? "Create an account" : "Login"}
          toggle={toggle}
          login={showModal.login}
        />
      </Modal.Footer>
    </Modal>
  );
}

const LoginFooter = ({ text, link, toggle, login }: any) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span>{text}</span>
      <Button className="footerButton" onClick={() => toggle(login)}>
        {link}
      </Button>
    </div>
  );
};

export default CenteredModal;
