import React from "react";
import SocialItems from "./socialItems";

function Social() {
    return (
        <ul className="list-group">
            <SocialItems media='Facebook' id='facebook' />
            <SocialIte media='Youtube' id='youtube' />
            <SocialItems media='Github' id='github' />
        </ul>
    );
}
export default Social;