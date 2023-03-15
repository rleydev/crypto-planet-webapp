import React, { useEffect, useState } from 'react';
import ExtensionWindow from './components/modal-window/modal-window';
import { Routes, Route } from 'react-router-dom';
import UserPage from './components/UserPage/userpage';
import './App.scss';
import Main from './components/main/main';


function App() {
  const [showModal, setShowModal] = useState(false);
  const formUser = localStorage.getItem('form-user')
  // const formUserParsed = JSON.parse(formUser!)

  useEffect(() => {
    if (formUser) {
      setShowModal(false)
    } else {
      setShowModal(true)
    } // Set showModal to true after the component has mounted
  }, []);

  const handleCloseModal = () => {
    setShowModal(false); // Set showModal to false when the close button is pressed
  }



  return (
      <Routes>
        <Route path="/crypto-planet-webapp" element={<div>
          {showModal && <ExtensionWindow handleClose={handleCloseModal} />}
          {<Main />}</div>}>
        </Route>
        <Route path='/crypto-planet-webapp/user' element={<UserPage />} />
      </Routes>

  );
}

export default App;
