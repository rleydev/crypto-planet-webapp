import React, { useEffect, useState} from "react"
import { Link } from 'react-router-dom';
import "./userstable.scss"

interface UsersData {
    id: number;
    username: string;
    email: string;
    address: string;
}

const UsersTable = () => {


    const [users, setUsers] = useState<UsersData[]>([])

    // fetch users data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://new-backend.unistory.app/api/data?page=0&perPage=50');
                     const data = await response.json();
                     setUsers( data.items)
                     console.log(data)
            } catch (e) {
                alert('Error fetching table data')
            }
        }
        fetchData();
     }, []);

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
                {users.map((user: UsersData) => 
                <div key={user.id.toString()}>
                    <div className="table-body">
                        <div  className="name-column">
                            <p>{user.username}</p>
                            {/* <Link to={`/user/${user.id}`}>{user.username}</Link> */}
                        </div>
                        <div className="email-column">
                            <p>
                                {user.email}
                                {/* <Link to={`/user/${user.id}`}>{user.username}</Link> */}
                            </p>
                        </div>
                        <div className="wallet-column">
                            <p>
                                {user.address}
                                {/* <Link to={`/user/${user.id}`}>{user.username}</Link> */}
                            </p>
                        </div>
                    </div> 
                </div>   
                )}
            </div>
            
      </article>
    </div>
  )
}

export default UsersTable