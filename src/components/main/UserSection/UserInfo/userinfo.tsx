import React from "react"
import "./userinfo.scss"

interface UserInfoProps {
    name: string;
    email: string;
  }

const UserInfo: React.FC<UserInfoProps> = ({ name, email }) =>{
  return (
    <div className="user-info">
        <label>NAME</label>
        <p>{name}</p>
        <label>EMAIL</label>
        <p>{email}</p>
        <button type="button">LIST ME TO THE TABLE</button>
    </div>
  )
}

export default UserInfo