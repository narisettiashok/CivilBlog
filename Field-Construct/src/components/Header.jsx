import react from 'react';
import reactDOM from 'react-dom';
import "../css/Header.css";


const Header = () =>
    <div className="header-Main">
        <div className="logo">
            <img className="logo-img" src="../images/logo.jpg" />
        </div>
        <div className="nav-items">
            <a href="#" className="text-xs"> Home </a>
            <a href="#"> About </a>
            <a href="#"> Projects </a>
            <a href="#"> Contact </a>
        </div>
        <div className="login-signup">
            <button className="login-signup-btn"> Login/Signup </button>
        </div>
    </div>

export default Header;