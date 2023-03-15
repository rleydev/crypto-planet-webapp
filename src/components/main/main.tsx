import React, { useEffect } from "react";
import Explore from "./explore/explore";
import User from "./UserSection/user";
import "./main.scss";
import { useEthers } from "@usedapp/core";

const Main:React.FC = () => {

const link = localStorage.getItem('link')
let linkParsed = JSON.parse(link!)

// const deleteState = localStorage.getItem('link')
// let deleteStateParsed = JSON.parse(deleteState!)


useEffect(() => {
  if (link) {
    linkParsed = false
    localStorage.setItem('link', JSON.stringify(linkParsed))
  }

  // if (deleteState) {
  //   localStorage.setItem('delete-state', 'false')
  // }
}, [])
  return (
    <div className="main-page">
      <Explore />
      <User />
    </div>
  )
}

export default Main
