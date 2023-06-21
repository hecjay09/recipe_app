import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Header() {
    return (
        <nav>
            <h2>Recipe App</h2>
            <ul>
                <li>
                    <NavLink to="/add-recipe">Add Recipe</NavLink>
                </li>

                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
