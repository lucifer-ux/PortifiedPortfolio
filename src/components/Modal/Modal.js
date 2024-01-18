import React from "react";
import "./Modal.css"
import Form from "../Form/Form.js"

const Modal = () => {
  return (
    <>
      <button className="open-modal-btn">Contact Me</button>

      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <h2>Contact Me</h2>
            <button className="close-modal-btn">&times;</button>
          </div>
          <div className="modal-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, eros at posuere fringilla, turpis tortor efficitur velit,
              at fringilla tortor magna id quam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
