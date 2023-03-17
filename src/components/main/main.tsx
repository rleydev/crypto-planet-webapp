import React, { useEffect, useState } from "react";
import Explore from "./explore/explore";
import User from "./UserSection/user";
import "./main.scss";
import Header from "../Header/header";


const Main:React.FC = () => {

// const link = localStorage.getItem('link')
// let linkParsed = JSON.parse(link!)

// Store data of account adress
const [storedAccount, setStoredAcc] = useState<string>('')

const saveAccount = (account: string) => {
  setStoredAcc(account)
}
  return (
      <div className="main-page">
        <Header saveAccountToStorage={saveAccount} />
        <Explore />
        { storedAccount === "" ? (
          <User />
        ) : (
          <User accountAdress={storedAccount} handleConnect={saveAccount} />
        )}
      </div>
  )
}

export default Main
