import React from "react";
import { Link } from 'react-router-dom';
import { useEthers } from '@usedapp/core';
import './header.scss';

const Header:React.FC = () => {

  const shortenAddress = (addr: string): string => `${addr.slice(0, 5)}...${addr.slice(-4)}`;
  const { activateBrowserWallet, account } = useEthers();

  const buttonPressed = () => {
    localStorage.setItem('click', 'true')
    console.log('header pressed' + localStorage.getItem('click'))
    activateBrowserWallet()
  }

  return (
    <div className="head">
      <div className="head__header">
        <Link to="/crypto-planet-webapp" className="head__header-link">
          <div className="head__header__logo">LOGO</div>  
        </Link>
        {!account ? (
          <button
            className="head__header__connect"
            onClick={() => buttonPressed()}
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