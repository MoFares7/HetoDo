import React from "react";

function SocialItems(props) {

    return (
        <li className="list-group-item">
            <img src={props.img}></img>
            <input type="checkbox" id={props.media} />
            <label for={props.media}>{props.media}</label>
        </li>
    );
}
export default SocialItems;