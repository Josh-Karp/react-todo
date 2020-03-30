import React from "react";
import Logo from "../images/logo.png";

const Header = props => {
    return (
        <div>
            <div className="logo-container">
                <img className="logo" src={Logo} alt="logo" />
            </div>
            <div className="title">Todo List</div>
        </div>
    );
};

export default Header;