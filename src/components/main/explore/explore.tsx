import React from "react"
import { useEthers } from '@usedapp/core';
import "./explore.scss"
import CryptoPlanet from "./CryptoPlanet/crypto-planet"
import Info from "./Info/info";

const Explore:React.FC = () => {

  const shortenAddress = (addr: string): string => `${addr.slice(0, 5)}...${addr.slice(-4)}`;
  const { activateBrowserWallet, account } = useEthers();

  return (
    <div className="explore">
      <div className="explore__header">
        <div className="explore__header__logo">LOGO</div>
        {!account ? (
          <button
            className="explore__header__connect"
            onClick={() => activateBrowserWallet()}
          >
            CONNECT METAMASK
          </button>
        ) : (
          <div className="explore__header__adress">{shortenAddress(account)}</div>
        )}
      </div>
      <CryptoPlanet />
      <Info />
    </div>
  )
}

export default Explore
