import React, { useEffect, useState } from 'react';
import ExtensionWindow from './components/modal-window/modal-window';
import { Routes, Route } from 'react-router-dom';
import UserPage from './components/UserPage/userpage';
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
    <Routes>
      <Route path="/" element={<div>
        {showModal && <ExtensionWindow handleClose={handleCloseModal} />}
        {<Main />}</div>}>
      </Route>
      <Route path='/user' element={<UserPage />} />
    </Routes>
   
  );
}

export default App;
