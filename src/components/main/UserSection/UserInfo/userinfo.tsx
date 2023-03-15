import React, {useState} from "react"
import "./userinfo.scss";
import {  useEthers } from '@usedapp/core';

interface UserInfoProps {
    name: string;
    email: string;
    clickList: (name: string, email: string) => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email, clickList }) => {

  const [user, setUser] = useState({username: "", useremail: ""});
  const { account } = useEthers();

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (account) {
      if (!isClicked) {
        clickList(user.username, user.useremail)
        setIsClicked(true)
      }
      }
    // }
    
    
  };

  return (
    <form onSubmit={handleClick} className="user-info">
        <label>NAME</label>
        <input type='text' value={name} onChange={e => e.target.value}>
        </input>
        <label>EMAIL</label>
        <input type='text' value={email} onChange={e => e.target.value} >
        </input>
        { !account ? (
            <button type="submit" className="list-button list-button-disabled">LIST ME TO THE TABLE</button>
          ) : (
            <button type="submit" className="list-button" onClick={() => setUser({username: name, useremail:email})}>LIST ME TO THE TABLE</button>
          )
        }
        
    </form>
  )
}

export default UserInfo