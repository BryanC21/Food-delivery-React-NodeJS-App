import React from "react";
import pic from "../../images/MarcoTempPic.png";

function MarcoMarino(){
    return(
        
        <div>
            <h1>Marco Marino</h1>
            <br></br>
            <img src={pic} />
            <ul>
                <li>Role: Github Master</li>
                <li>Major: Computer Science</li>
                <li>Career Goal: Game Programming</li>
            </ul>
        </div>
    );
}
export default MarcoMarino;