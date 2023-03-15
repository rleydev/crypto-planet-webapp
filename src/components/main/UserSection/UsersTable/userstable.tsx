
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useEthers } from "@usedapp/core"
import "./userstable.scss"

interface UsersData {
    id: number
    username: string
    email: string
    address: string
}

interface User {
    username?: string
    useremail?: string
    handleChange?: (somename: string, someemail: string) => void
}

const UsersTable: React.FC<User> = ({ username, useremail, handleChange }) => {
    // Metamask Account
    const { account } = useEthers()
    const address = (addr: string): string => `${addr}`
    const storedData = localStorage.getItem("users")
    const parsedUsers = JSON.parse(storedData!) as UsersData[]

    // users
    const [allUsers, setAllUsers] = useState<UsersData[]>([])
    const [customUser, setCustomUser] = useState<UsersData[]>([
        {
            id: Math.floor(Math.random() * 1000000),
            username: username || "name",
            email: useremail || "email",
            address: "adress",
        },
    ])
   

    const formUser = localStorage.getItem('form-user')
    const parsedFormUser = JSON.parse(formUser!)


    function addUser() {
        setAllUsers((prev) => [
            {
                id: customUser[0].id,
                username: username || "name",
                email: useremail || "email",
                address: address(account || "adress"),
            },
            ...prev,
        ])

         // For local Storage
        const user = {
            id: customUser[0].id,
            username: username || "name",
            email: useremail || "email",
            address: address(account || "adress"),
        }

        localStorage.setItem("users", JSON.stringify([user]))

        setUser()

        console.log('CUTOM -' + customUser[0].email)
    }

    function setUser() {
        setCustomUser([
            {
                id: customUser[0].id,
                username: username || "name",
                email: useremail || "email",
                address: customUser[0].address,
            },
        ])
    }

    function removeUser() {
        if (allUsers[0].username === parsedFormUser.name) {
            // remove user custom from state
            setAllUsers((prev) =>
                prev.filter((user) => user.username !== parsedFormUser.name)
            )

            localStorage.removeItem('form-user')
        }

        console.log('REMOVE')
    }

    async function fetchData() {
        try {
            const response = await fetch(
                "https://new-backend.unistory.app/api/data?page=0&perPage=50"
            )
            const data = await response.json()
            if (parsedUsers[0].username === "name") {
                setAllUsers(data.items)
                console.log('set1')
            } else if ((storedData)) {
                    setAllUsers( [parsedUsers[0], ...data.items])
                    console.log(parsedUsers)
                    console.log('set2')
            }
        } catch (e) {
            alert("Error fetching table data")
        }
        
    }


    // Add user from left side data to list
    useEffect(() => {
        addUser()
        console.log("hanlde USEr)")
        console.log(parsedFormUser)
    }, [handleChange])

    // fetch users data from API and activates Metamask for adress
    useEffect(() => {
        fetchData()
        console.log("fetch did")
    }, [])

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
                            (index === 0 && (parsedFormUser) && allUsers[0].username === parsedFormUser.name) ||
                            (index === 0 && allUsers[0].username === username) 
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
                                        onClick={removeUser}
                                    ></div>
                                </div>
                            )
                        } else if (allUsers[0].username !== 'name' || (allUsers)) {
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
                                        {allUsers[0].username === username && allUsers[0].username !== parsedFormUser.name && (
                                            <div
                                                className="delete"
                                                onClick={removeUser}
                                            ></div>
                                        )}
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

export default UsersTable
