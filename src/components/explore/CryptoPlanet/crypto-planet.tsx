import React from "react";
import './crypto-planet.scss'
import Planet from './Planet/planet'

const CryptoPlanet = () => {
    return (
        <div className="first-headline">
            <div className="first-headline__headline">
                <h1>Explore Your own planet</h1>
                <h1>In <span>our New</span> metaverse</h1>
                <div className="nplanet">N PLANET</div>
                <div className="verse">VERSE</div>
            </div>
            <Planet />
            
        </div>
    )
}

export default CryptoPlanet;