import React from "react";
import './explore.scss'
import CryptoPlanet from './CryptoPlanet/crypto-planet';

const Explore = () => {
    return (
        <div className="explore">
            <div className="explore__header">
                <div className="explore__header__logo">LOGO</div>
                <button className="explore__header__adress">CONNECT METAMASK</button>
            </div>
            <CryptoPlanet />
        </div>
    )
}

export default Explore;