import { Link } from 'react-router-dom';

import "../css/Header.css";


function Header() {
    return (
        <div className="header-Main">
            <div className="logo">
                <img className="logo-img" src="../images/logo.jpg" alt="Field Construct" />
            </div>
            <div className="nav-items">
                <a href="#" className="text-xs"> Home </a>
                <a href="#"> About </a>
                <a href="#"> Projects </a>
                <a href="#"> Contact </a>
            </div>
            <div className="login-signup">
                <Link to="/auth/login" className="login-signup-btn"> Login </Link>
                <Link to="/auth/sign-up" className="login-signup-btn ml-2"> Signup </Link>
            </div>
        </div>
    );
}


export default Header;