import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const propTypes = {
    currentUser: PropTypes.object,
    loggedIn: PropTypes.bool,
};

const LoggedIn = ({currentUser, logout}) => {
    return (
        <nav className="header__menu">
            <Link to="/" className="header__menu__link">
                Home
            </Link>
            <Link to="/editor" className="header__menu__link">
                New Post
            </Link>
            <Link to="/settings" className="header__menu__link">
                Settings
            </Link>
            <Link to={`/${currentUser}`} className="header__menu__link">
                <img src={currentUser.image}
                     className="header__menu__img"
                     alt=""/>
                {currentUser.username}
            </Link>
            <span className="header__menu__link"
                  onClick={() => {logout();}}>
                Exit
            </span>
        </nav>
    );
};

const LoggedOut = () => {
    return (
        <nav className="header__menu">
            <Link to="/" className="header__menu__link">
                Home
            </Link>
            <Link to="/login" className="header__menu__link">
                Sign in
            </Link>
            <Link to="/register" className="header__menu__link">
                Sign up
            </Link>
        </nav>
    );
};


const Header = ({currentUser, logout}) => {
    return (
        <header className="header">
            <Link to="/" className="header__logo"/>
            {currentUser ?
                <LoggedIn currentUser={currentUser} logout={logout}/> :
                <LoggedOut/>
            }
        </header>
    );
};

Header.propTypes = propTypes;
export default Header;

