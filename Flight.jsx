import React from "react";
import FlightNav from "./FlightNav";
import "./index.css"
function Flight(){
    return(
        <div className="navBlock">
            <div className="head">FickleFlight</div>
            <FlightNav />
        </div>
    )
}
export default Flight;
