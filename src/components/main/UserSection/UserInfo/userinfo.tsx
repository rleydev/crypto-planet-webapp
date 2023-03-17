import React, {useState} from "react"
import "./userinfo.scss";
import {  useEthers } from '@usedapp/core';

interface UserInfoProps {
    name: string;
    email: string;
    clickList: (id: string, name: string, email: string, adress: string) => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email, clickList }) => {

  const [user, setUser] = useState({username: "", useremail: ""});

  const clickValue = localStorage.getItem('click')
  let click = JSON.parse(clickValue!)

  const { account } = useEthers();

  const [clickState, setClickState] = useState<boolean>(click);

  const formUser = localStorage.getItem('form-user')
  const parsedFormUser = JSON.parse(formUser!)

  const formSub = localStorage.getItem('form-sub')
  const parsedForm = JSON.parse(formSub!)

  const handleSubmit = () => {
    // console.log('submitted user - ' + user.username)
    // clickList(parsedForm.name, parsedForm.email)
    // setClickState(false)
    clickList("id", name, email, "adress")

    // setUser({username: name, useremail: email})
    console.log('Handle Submit LAST FORM COMPONENT INNER')
    // click = false
    // localStorage.setItem('click', JSON.stringify(click))
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