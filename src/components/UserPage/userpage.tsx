import React from "react";
import './userpage.scss';
import Header from "../Header/header";
import Planet from "../Planet/planet";
import { useLocation } from 'react-router-dom';


const UserPage: React.FC = () => {

    const location = useLocation();
    const user = location.state.user;

  return (
    <div className="detail-page">
        <Header />
        <article className="detail-page__container">
            <div className="detail-container">
                <h1>PERSONAL DATA</h1>
                <div className="detail-data-container">
                    <h2>NAME</h2>
                    <p>{user.username}</p>
                    <h2>EMAIL</h2>
                    <p>{user.email}</p>
                    <h2>WALLET</h2>
                    <p>{user.address}</p>
                </div>
            </div>
            <Planet />
        </article>
    </div>
  );
};

export default UserPage;