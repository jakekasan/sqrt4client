import React, { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: FunctionComponent<{}> = () => {

    const location = useLocation();
    
    console.log(location.pathname);

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/courses">Kurzy</Link>
            <Link to="/projects">Projekty</Link>
            <Link to="/login">Login</Link>
        </nav>
    )
}

export default Header;