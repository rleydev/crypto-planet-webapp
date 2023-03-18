import React from "react"
import { Link } from "react-router-dom"
import "./userstable.scss"

interface UsersData {
    id: number
    username: string
    email: string
    address: string
}

interface UsersTable {
    allUsers: UsersData[]
    handleDelete?: () => void
}

const UserTable: React.FC<UsersTable> = ({ allUsers, handleDelete}) => {

    const lastFormUser = localStorage.getItem('form-user')
    const parsedLastFormUser = lastFormUser ? JSON.parse(lastFormUser) : {};


    const formSub = localStorage.getItem('form-sub')
    const parsedForm = JSON.parse(formSub!)

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
                    {allUsers.map((user: UsersData, index: number) => {
                        if (
                            (index === 0 && lastFormUser && allUsers[0].username === parsedLastFormUser.customUser.username
                                && allUsers[0].username === parsedForm.name)
                        ) {
                            return (
                                <div
                                    className="table-body"
                                    key={user.id.toString()}
                                >
                                    <div className="name-column custom-name-column">
                                        <p>{user.username}</p>
                                    </div>
                                    <div className="email-column custom-email-column">
                                        <p>{user.email}</p>
                                    </div>
                                    <div className="wallet-column custom-wallet-column">
                                        <p>{user.address}</p>
                                    </div>
                                    <div
                                        className="delete"
                                        onClick={handleDelete}
                                    ></div>
                                </div>
                            )
                        } else {
                            return (
                                <Link
                                    to="/crypto-planet-webapp/user"
                                    state={{ user }}
                                    className="name-column"
                                    key={user.id.toString()}
                                >
                                    <div
                                        className="table-body"
                                        
                                    >
                                        <div className="name-column">
                                            <p>{user.username}</p>
                                        </div>
                                        <div className="email-column">
                                            <p>{user.email}</p>
                                        </div>
                                        <div className="wallet-column">
                                            <p>{user.address}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    })}
                </div>
            </article>
        </div>
    )
}

export default UserTable
