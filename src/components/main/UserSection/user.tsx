import React, { useState } from "react"
import BetaInfo from "./BetaInfo/betainfo"
import Form from "./Form/form"
import UserInfo from "./UserInfo/userinfo"
import UsersTable from "./UsersTable/userstable"
import "./user.scss"

const User:React.FC = () => {

  const [data, setData] = useState({ name: "", email: "" });

  const handleFormSubmit = (name: string, email: string) => {
    setData({ name, email });
  };

  return (
    <div className="user">
      <div className="user__left">
        <BetaInfo />
        { data.name && data.email ? (
          <UserInfo name={data.name} email={data.email}/>
        ) : (
          <Form onSubmit={handleFormSubmit} />
        )}
      </div>
      <UsersTable />
    </div>
  )
}

export default User