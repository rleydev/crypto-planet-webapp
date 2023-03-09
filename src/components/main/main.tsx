import React from "react"
import Explore from "./explore/explore"
import User from "./UserSection/user"
import "./main.scss"

const Main:React.FC = () => {
  return (
    <div className="main-page">
      <Explore />
      <User />
    </div>
  )
}

export default Main
