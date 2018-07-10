import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <div className="Navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/courses">Courses</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;