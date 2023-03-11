import React, {useState} from "react"
import {  useEthers } from '@usedapp/core';
import "./userinfo.scss"

interface UserInfoProps {
    name: string;
    email: string;
    clickList: (name: string, email: string) => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email, clickList }) => {

  
  const [user, setUser] = useState({username: "", useremail: ""});
  const [isClicked, setIsClicked] = useState<boolean>(false);


  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Limit to 1 click to add to the table
    if (!isClicked) {
      clickList(user.username, user.useremail)
      setIsClicked(true)
    }
};

  return (
    <form onSubmit={handleClick} className="user-info">
        <label>NAME</label>
        <input type='text' value={name} onChange={e => e.target.value}>
        </input>
        <label>EMAIL</label>
        <input type='text' value={email} onChange={e => e.target.value} >
        </input>
        <button type="submit" onClick={() => setUser({username: name, useremail:email})}>LIST ME TO THE TABLE</button>
    </form>
  )
}

export default UserInfo