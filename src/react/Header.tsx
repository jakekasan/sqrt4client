import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();
    
    console.log(location.pathname);
    
    return (
        <nav>
            <Link to="/"></Link>
            <Link to="/courses">Kurzy</Link>
            <Link to="/projects">Projekty</Link>
            <Link to="/login">Login</Link>
        </nav>
    )
}

export default Header;