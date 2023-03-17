import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import { useEthers } from '@usedapp/core';
import './header.scss';

interface HeaderProps {
  saveAccountToStorage: (account: string) => void
}

const Header:React.FC<HeaderProps> = ({saveAccountToStorage}) => {

  const shortenAddress = (addr: string): string => `${addr.slice(0, 5)}...${addr.slice(-4)}`;
  const { activateBrowserWallet, account } = useEthers();

  const buttonPressed = () => {
    localStorage.setItem('click', 'true')
    activateBrowserWallet()
    console.log('header pressed and account connected')
  }

  const saveAccount = () => {
    localStorage.setItem('account', account!)
    const storedAccount = localStorage.getItem('account')
    console.log('GET ACC _' + storedAccount)
    saveAccountToStorage(storedAccount!)
  }

  // Save account adress 
  useEffect(() => {
    saveAccount()
  }, [account])

  return (
    <div className="head">
      <div className="head__header">
        <Link to="/crypto-planet-webapp" className="head__header-link">
          <div className="head__header__logo">LOGO</div>  
        </Link>
        {!account ? (
          <button
            className="head__header__connect"
            onClick={(e) => { e.preventDefault(); buttonPressed()}}
          >
            CONNECT METAMASK
          </button>
        ) : (
          <div className="head__header__adress">{shortenAddress(account)}</div>
        )}
      </div>
    </div>
  )
}

export default Header