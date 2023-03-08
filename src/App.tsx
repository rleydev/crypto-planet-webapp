import React, { useEffect, useState } from 'react';
import ExtensionWindow from './components/modal-window/modal-window';
import './App.scss'
import Main from './components/main/main'

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true); // Set showModal to true after the component has mounted
  }, []);

  const handleCloseModal = () => {
    setShowModal(false); // Set showModal to false when the close button is pressed
  }

  return (
    <div>
      
      {<Main />}
      {showModal && <ExtensionWindow handleClose={handleCloseModal} />} {/* Render the modal only when showModal is true */}

    </div>
  );
}

export default App;
