import React from "react";
import './crypto-planet.scss'
import Planet from '../../../Planet/planet'
import Roadmap from "./RoadMap/roadmap";

const CryptoPlanet:React.FC = () => {
    return (
        <div className="first-headline">
            <div className="first-headline__headline">
                <h1>Explore Your own planet</h1>
                <h1>In <span>our New</span> metaverse</h1>
                <div className="nplanet">
                    N PLANE
                </div>
                <div className="verse">
                    VERSE
                </div>
            </div>
            <Planet />
            <Roadmap />
        </div>
    )
}

export default CryptoPlanet;