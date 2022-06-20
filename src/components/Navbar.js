import React from "react";
import { Link } from "react-router-dom";
import css from "./Navbar.css";

function Navbar(){

    return(

        <div className="navbar" style={css}>

            <h1>

                <b>Thomas Li</b>

            </h1>

            <div className="nav_items">

                <Link to="/">Home</Link>

                <Link to="/projects">Projects</Link>

                <Link to="/contact">Contact</Link>

            </div>

        </div>

    );

}

export default Navbar;