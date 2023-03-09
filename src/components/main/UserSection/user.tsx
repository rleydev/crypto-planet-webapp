import React from "react"
import BetaInfo from "./BetaInfo/betainfo"
import Form from "./Form/form"
import "./user.scss"

const User = () => {
  return (
    <div className="user">
      <div className="user__left">
        <BetaInfo />
        <Form />
      </div>
      
    </div>
  )
}

export default User