import React from "react";
import css from "./Spacer.css";

function Spacer() {

    return(

        <div className="spacer" style={css}>

            <p>{getChars()}</p>

        </div>

    );

}

function getChars() {

    var width = window.innerWidth;
    var space = ""

    for(var x = 0; x < width / 9.5; x++) {

        space += "=";

    }

    return(

        space

    );

}

export default Spacer;