import React, { useEffect, useState } from "react";
import BetaInfo from "./BetaInfo/betainfo";
import Form from "./Form/form";
import UserInfo from "./UserInfo/userinfo";
import UserTable from "./UsersTable/userstable";
import "./user.scss";
import {useEthers} from '@usedapp/core';

interface UsersTablesData {
  id: number
  username: string
  email: string
  address: string
}

interface UserProps {
  accountAdress?: string
  handleConnect?: (account: string) => void
}

const User:React.FC<UserProps> = ({accountAdress, handleConnect}) => {

  const [allUsersTable, setAllUsersTable] = useState<UsersTablesData[]>([])

  const [data, setData] = useState({ name: "", email: "" });
  const [user, setUser] = useState({ username: "", useremail: "" });
  const {account} = useEthers()

  const lastFormSub = localStorage.getItem('form-user')
  const parsedLastFormSub = lastFormSub ? JSON.parse(lastFormSub) : {}

  const formSub = localStorage.getItem('form-sub')
  const parsedForm = JSON.parse(formSub!)

  const [customUser, setCustomUser] = useState<UsersTablesData>({
    id: Math.floor(Math.random() * 1000000),
    username: 'name',
    email: 'email',
    address: account || 'adress', 
  })


  const [formState, setFormState] = useState<boolean>(false);


  const handleFormSubmit = (name: string, email: string) => {
    setData({ name, email });
    setFormState(true) 
 
    if (lastFormSub && parsedLastFormSub.customUser.username !== 'name'
    && formSub) {
      setCustomUser({
        ...customUser,
        username: parsedForm.username,
        email: parsedForm.email,
      })
      console.log('PASSED FROM form user')
    } else {
      setCustomUser({
        ...customUser,
        username: name,
        email: email,
      })
      console.log('PASSED FROM form user NO')
    }
    

    console.log('handleSUBMIT FORM' )
  };

  const addUser = () => {
    
  }

  const handleListToTable = (id: string, username: string, useremail: string, adress: string) => {
    console.log('submit LAST FORM')

    // if (customUser.id !== allUsersTable[0].id ) {
      localStorage.setItem('form-user', JSON.stringify({customUser}))
      
      if (formSub && allUsersTable[0].username !== parsedForm.name
        && parsedForm.username !== 'name')  {
          setAllUsersTable(prev => [
            {
              id: customUser.id,
              username: parsedForm.name,
              email: parsedForm.email,
              address: accountAdress || account || 'acc',
            },
            ...prev
          ])
          console.log('ALL USERS TO TABLE _ ' + allUsersTable[0].username)
        } 
  
  }


  const handleDeleteFromTable = () => {
    setFormState(false)
   
    setAllUsersTable(prev => prev.slice(1))
    localStorage.removeItem('form-user')
    localStorage.removeItem('form-sub')
    console.log('AFTER DELETE 1USER IS' + allUsersTable[0].username)
   
    console.log('deletehandler')

  }

  async function fetchData() {
    try {
        const response = await fetch(
            "https://new-backend.unistory.app/api/data?page=0&perPage=50"
        )
        const data = await response.json()
        if (lastFormSub) {
          setAllUsersTable([
              {
                id: parsedLastFormSub.customUser.id,
                username: parsedLastFormSub.customUser.username,
                email: parsedLastFormSub.customUser.email,
                address: parsedLastFormSub.customUser.address,
              }, ...data.items]
          )
          setFormState(true)
        } else {
          setAllUsersTable(data.items)
          console.log('set-1')
        }
            
    } catch (e) {
        alert("Error fetching table data")
    }
}

  // Observe Connection of Metamask Account and Setting adress
  useEffect(() => {

    if (formSub) {
      setCustomUser({
        ...customUser,
        username: parsedForm.name,
        email: parsedForm.email,
        address: accountAdress || 'sm'
      })
  
      localStorage.setItem('form-user', JSON.stringify({customUser}))
    }

    console.log('ACTIVATE WALLET AFTER SUBMIT ' + account)
  }, [handleConnect])


  useEffect(() => {
    // Loading Data to Table
    fetchData()

    // Observe Form State for Page Reloading
    if (formSub && !lastFormSub) {
      setFormState(true)
      console.log('setFormstate ' + formState)
    }
    // Observe User Submited Form for Page Reloading
    if (formSub) {
      setCustomUser({
        ...customUser,
        username: parsedForm.name,
        email: parsedForm.email
      })
    }



    // console.log('FORMS STORAGE CHECK AFTER LOADING _ ' + parsedLastFormSub.customUser.email + ' ' + parsedForm.email)

  }, []);

  return (
    <div className="user">
      <div className="user__left">
        <BetaInfo />
        {  (formState === true) ? (
          <UserInfo name={parsedForm.name} email={parsedForm.email} clickList={handleListToTable}/>
        ) : (
          <Form onSubmit={handleFormSubmit} />
        )}
      </div>
      { (lastFormSub) ? (
        <UserTable allUsers={allUsersTable} handleDelete={handleDeleteFromTable}/>
      ) : (
        <UserTable allUsers={allUsersTable} />
      )}
    </div>
  )
}

export default User