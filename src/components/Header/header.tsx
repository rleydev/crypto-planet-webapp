import React from "react";
import { useEthers } from '@usedapp/core';
import './header.scss';

const Header:React.FC = () => {

  const shortenAddress = (addr: string): string => `${addr.slice(0, 5)}...${addr.slice(-4)}`;
  const { activateBrowserWallet, account } = useEthers();

  return (
    <div className="head">
      <div className="head__header">
        <div className="head__header__logo">LOGO</div>
        {!account ? (
          <button
            className="head__header__connect"
            onClick={() => activateBrowserWallet()}
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