import React from 'react';

function Modal({ title, body, onClose }) {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="header">
          {title}
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="body">{body}</div>
      </div>
    </div>
  );
}

export default Modal;
