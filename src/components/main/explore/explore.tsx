import React from "react";
import CryptoPlanet from "./CryptoPlanet/crypto-planet";
import Info from "./Info/info";

const Explore:React.FC = () => {

  return (
    <div className="explore">
      <CryptoPlanet />
      <Info />
    </div>
  )
}

export default Explore
