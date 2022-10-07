import React from "react";
import SocialItems from "./socialItems";

function Social() {
    return (
        <ul className="list-group">
            <SocialItems
                media='Facebook'
                id='facebook'
                img='https://picsum.photos/100'
            />
            <SocialItems
                media='Youtube'
                id='youtube'
                img='https://picsum.photos/101'
            />
            <SocialItems
                media='Github'
                id='github'
                img='https://picsum.photos/102'
            />
        </ul>
    );
}
export default Social;