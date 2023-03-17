import React, { useEffect, useState, useContext,  createContext } from 'react';
import ExtensionWindow from './components/modal-window/modal-window';
import { Routes, Route } from 'react-router-dom';
import UserPage from './components/UserPage/userpage';
import './App.scss';
import Main from './components/main/main';
import { useEthers } from '@usedapp/core';

// interface AccountContextType {
//     accountContext: string | undefined;
//     setAccount: (value: string | undefined) => void;
// }
  
// const AccountContext = createContext<AccountContextType>({ accountContext: undefined, setAccount: (value: string | undefined) => {} });
 

function App() {

  const [showModal, setShowModal] = useState(false);
  const formUser = localStorage.getItem('form-user')
  // const formUserParsed = JSON.parse(formUser!)

  // const { accountContext, setAccount } = useContext(AccountContext)
  const { account } = useEthers()

  // const [ accountContextState, setAccountState ] = useState<AccountContextType>({ accountContext: account, setAccount: (value: string | undefined) => {} })
  // const value = { accountContextState, setAccountState };
  

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


  useEffect(() => {
    console.log('current acc from App ' + account )
  }, [])


  return (
    // <AccountContext.Provider value={value.accountContextState} >
      <Routes>
        <Route path="/crypto-planet-webapp" element={<div>
          {showModal && <ExtensionWindow handleClose={handleCloseModal} />}
          {<Main />}</div>}>
        </Route>
        <Route path='/crypto-planet-webapp/user' element={<UserPage />} />
      </Routes>
    // </AccountContext.Provider>
  );
}

export { App };
