import React, { useEffect, useState } from "react";
import BetaInfo from "./BetaInfo/betainfo";
import Form from "./Form/form";
import UserInfo from "./UserInfo/userinfo";
import UsersTable from "./UsersTable/userstable";
import "./user.scss";


const User:React.FC = () => {

  const [data, setData] = useState({ name: "", email: "" });
  const [user, setUser] = useState({ username: "", useremail: "" });

  const formUser = localStorage.getItem('form-user')
  const parsedFormUser = JSON.parse(formUser!)

  const handleFormSubmit = (name: string, email: string) => {
    setData({ name, email });
  };

  const handleListToTable = (username: string, useremail: string) => {
      setUser({ username, useremail })
      
  }

  return (
    <div className="user">
      <div className="user__left">
        <BetaInfo />
        {(parsedFormUser) ? (
          <UserInfo name={parsedFormUser.name} email={parsedFormUser.email} clickList={handleListToTable}/>
        ) : (data.name && data.email) ? (
          <UserInfo name={data.name} email={data.email} clickList={handleListToTable}/>
        ) : (
          <Form onSubmit={handleFormSubmit} />
        )}
      </div>
      { user.username && user.username ? (
        <UsersTable username={data.name} useremail={data.email} handleChange={handleListToTable} />
      ) : (
        <UsersTable />
      )}
    </div>
  )
}

export default User