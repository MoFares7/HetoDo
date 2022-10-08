import React from "react";

function OurTeamItem(props) {

    return (
    <div className="col-md-4 col-sm-6">    
        <div className="card">
            <div className="card-header">
                <img style={{maxWidth: '100%'}} src={props.image}></img>
            </div>
                <div className="card-body" style={{
                    background: props.website
                        ? 'white' : 'green'
                }}>
            <h3>{props.name}</h3>
            <p className="work">{props.work}</p>
            <p className="Phone">{props.phone} </p>
            <p className="Email">{props.email} </p>
            <p className="Website">{props.website} </p>
            </div>
        </div>
    </div>
    );
}

export default OurTeamItem;