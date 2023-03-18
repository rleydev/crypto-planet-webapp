import React from "react";
import './crypto-planet.scss';
import Planet from '../../../Planet/planet';
import Roadmap from "./RoadMap/roadmap";

const CryptoPlanet:React.FC = () => {
    return (
        <div className="first-headline">
                <div className="first-headline__headline">
                    <h1>Explore Your own planet</h1>
                    <h1>In <span className="our-span">our New</span > metaverse</h1>
                </div>
            <div className="overlay-text"> 
                <h1>Explore Your own planet</h1> 
                <h1>In our New metaverse</h1> 
            </div>
            <Planet />
            <Roadmap />
        </div>
    )
}

export default CryptoPlanet;