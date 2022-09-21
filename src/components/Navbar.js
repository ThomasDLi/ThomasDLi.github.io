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

                <a href="https://thomasdli.notion.site/thomasdli/My-Blog-12aad5c68cb54e01baa1e640fef81015" target="_blank" rel="noreferrer">Blog</a>

                <Link to="/contact">Contact</Link>

            </div>

        </div>

    );

}

export default Navbar;