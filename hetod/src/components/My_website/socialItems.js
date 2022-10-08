import React from "react";
import Social from "./social";

function SocialItems(props) {

    return (
        <li className="list-group-item">
            <img src={props.connectApi.img} alt={props.connectApi.media}></img>
            <input type="checkbox" id={props.connectApi.media} />
            <label htmlFor={props.connectApi.media}>{props.connectApi.media}</label>
        </li>
    );
}
export default SocialItems;