import React from "react"
import "./userinfo.scss";
import {  useEthers } from '@usedapp/core';

interface UserInfoProps {
    name: string;
    email: string;
    clickList: (id: string, name: string, email: string, adress: string) => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email, clickList }) => {

  const { account } = useEthers();

  const handleSubmit = () => {
    clickList("id", name, email, "adress")
  } 

  return (
    <div className="user-info">
        <h3>NAME</h3>
        <p>
          {name}
        </p>
        <h3>EMAIL</h3>
        <p>
          {email}
        </p>
        { !account ? (
            <button type="submit" className="list-button list-button-disabled">LIST ME TO THE TABLE</button>
          ) : (
            <button type="submit" className="list-button" onClick={() => handleSubmit()}>LIST ME TO THE TABLE</button>
          )
        }
    </div>
  )
}

export default UserInfo