import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return (
        <nav className="nav-bar nav-bar-dark bg-dark fixed-top">
            <span className="navbar-brand">myCrud</span>
            <Link to="/films">
                <span>Films!</span>
            </Link>
        </nav>
    );
}

export default Nav;