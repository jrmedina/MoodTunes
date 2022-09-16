import React from 'react';
import './Error.css';
import errorImage from "../../assets/errorImage.svg";
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="errorDiv">
            <div>
                <p className="errorMessage">Sorry, you got to this page.</p>
                <p className="errorMessage">Please try again.</p>
                <Link to="/">
                <button className="home-button">GO BACK</button>
                </Link>
            </div>
            <div>
                <img className="spin"src={errorImage}/>
            </div>
        </div>
    )
}


export default Error;