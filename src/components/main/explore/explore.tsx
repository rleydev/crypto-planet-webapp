import React from "react"
import { useEthers } from '@usedapp/core';
import "./explore.scss"
import CryptoPlanet from "./CryptoPlanet/crypto-planet"
import Info from "./Info/info";

const shortenAddress = (addr: string): string => `${addr.slice(0, 5)}...${addr.slice(-4)}`;

const Explore = () => {


  const { activateBrowserWallet, deactivate, account } = useEthers();


  // const [showAddress, setShowAddress] = useState(false);
  // const { activateBrowserWallet, account } = useEthers();

  // const handleConnectWallet = async () => {
  //   await activateBrowserWallet();
  //   setShowAddress(true);
  // };

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
          <div onClick={() => deactivate()} className="explore__header__adress">{shortenAddress(account)}</div>
        )}
      </div>
      <CryptoPlanet />
      <Info />
    </div>
  )
}

export default Explore
