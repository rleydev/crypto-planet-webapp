import React from "react";
import './crypto-planet.scss'
import Planet from './Planet/planet'

const CryptoPlanet = () => {
    return (
        <div>
            <div className="headline">
                <h1>Explore Your own planet</h1>
                <h1>In <span>our New</span> metaverse</h1>
            </div>
            <Planet />
            
        </div>
    )
}

export default CryptoPlanet;