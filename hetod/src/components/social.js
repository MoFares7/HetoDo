import React from "react";

function Social() {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <input type="checkbox" id="facebook" />
                <label for="facebook">Facebook</label>
            </li>

            <li className="list-group-item">
                <input type="checkbox" id="twiter" />
                <label for="twiter">Twaiter</label>
            </li>

            <li className="list-group-item">
                <input type="checkbox" id="github" />
                <label for="github">Github</label>
            </li>
        </ul>
    );
}
export default Social;