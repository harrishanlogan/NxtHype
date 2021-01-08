import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav() {
    const Navstyle = {
        color: 'white'
    }

    return (
        <nav>
            <h3>
                NXTHYPE
            </h3>
            <ul className="nav-links">
                <Link style={Navstyle} to="/League">
                    <li>League Items Ranker</li>
                </Link>
                <Link style={Navstyle} to="/Anime">
                    <li>Upcoming Anime Ranker</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;