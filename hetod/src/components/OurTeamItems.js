import React from "react";

function OurTeamItem(props) {

    return (
        <div className="container">
            <img src={props.image}></img>
            <h3>{props.name}</h3>
            <p className="work">{props.work}</p>
            <p className="Phone">{props.phone} </p>
            <p className="Email">{props.email} </p>
            <p className="Website">{props.website} </p>
        </div>
    );
}

export default OurTeamItem;