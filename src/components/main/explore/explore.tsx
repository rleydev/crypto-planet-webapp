import React from "react";
import CryptoPlanet from "./CryptoPlanet/crypto-planet";
import Info from "./Info/info";
import Header from "../../Header/header";

const Explore:React.FC = () => {

  return (
    <div className="explore">
      <Header />
      <CryptoPlanet />
      <Info />
    </div>
  )
}

export default Explore
