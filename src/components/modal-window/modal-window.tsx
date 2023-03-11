import React from "react";
import './modal-window.scss'

interface ExtensionWindowProps {
    handleClose: () => void;
}

const ExtensionWindow: React.FC<ExtensionWindowProps> = ({ handleClose }) => {
  return (
    <div className="modal-back">
      <div className="modal-overlay">
        <div className="modal-overlay__container">
          <h2>METAMASK EXTENSION</h2>
          <p>To work with our application, you have to install the 
            <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"> Metamask browser extension</a></p>
          <button onClick={handleClose}>SKIP THIS STEP</button>
        </div>
      </div>
    </div>
  );
};

export default ExtensionWindow;