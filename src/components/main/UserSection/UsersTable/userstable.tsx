import React, { useEffect, useState} from "react"
import { Link } from 'react-router-dom';
import { useEthers } from "@usedapp/core";
import "./userstable.scss";

interface UsersData {
    id: number;
    username: string;
    email: string;
    address: string;
}

interface User {
    username?: string;
    useremail?: string;
    handleChange?: (name: string, email: string) => void;
}

const UsersTable:React.FC<User> = ({username,  useremail, handleChange}) => {

    // Metamask Account
    const { activateBrowserWallet, account } = useEthers();
    const address = (addr: string): string => `${addr}`;

    // users
    const [allUsers, setAllUsers] = useState<UsersData[]>([])

    // Add user from left side data to list
    useEffect(() => {
        addUser()
    }, [handleChange])

    function addUser() {
            setAllUsers(prev => [ {
                id: Math.floor(Math.random() * 1000000),
                username: username || 'Error',
                email: useremail || 'Error',
                address: address(account || 'Mock adress is set, please log into Metamask!'),
            }, ...prev])
    }

    // fetch users data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://new-backend.unistory.app/api/data?page=0&perPage=50');
                     const data = await response.json();
                     setAllUsers(data.items)
            } catch (e) {
                alert('Error fetching table data')
            }
        }
        activateBrowserWallet()
        fetchData();
     },[]);

  return (
    <div className="users-table">
      <h4>Participation listing (enable only for participants)</h4>

      <article>
            <div className="table-head">
                <h3>NAME</h3>
                <h3>EMAIL</h3>
                <h3>WALLET</h3>
            </div>
            <div className="table-body-container">
                {
                    allUsers.map((user: UsersData) => 
                        <div className="table-body" key={user.id.toString()}>
                                <Link to='/user' state={ {user} } className="name-column">
                                    <p>{user.username}</p>
                                </Link>
                                <Link to='/user' state={ {user} } className="email-column">
                                    <p>{user.email}</p>
                                </Link>
                                <Link to='/user' state={ {user} } className="wallet-column">
                                    <p>{user.address}</p>
                                </Link>
                        </div>)
                }
            </div>
            
      </article>
    </div>
  )
}

export default UsersTable