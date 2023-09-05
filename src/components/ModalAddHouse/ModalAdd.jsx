import "./ModalAdd.css";
import React from 'react';

const ModalAddHouse = ({ modal, handleClose, children, onClick }) => {
  return (
    <>
      {modal && (
        <div className="modalll">
          <div data-testid="overlay" onClick={handleClose} className="overlay"></div>
          <div className="modalll-content">
            {children}
            <button className="close-modal" onClick={() => { handleClose(); onClick(); }}>
              AÑADIR
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalAddHouse;
