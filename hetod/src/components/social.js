import React from "react";
import SocialItems from "./socialItems";

function Social() {
    return (
        <ul className="list-group">
            <SocialItems
                connectApi =
                {{
                media:'Facebook',
                id:'facebook',
                img:'https://picsum.photos/100'
                }}
            />
            <SocialItems
                connectApi =
                {{
                media:'Youtube',
                id:'youtube',
                img:'https://picsum.photos/101'
                }}
            />
            <SocialItems
                connectApi =
                {{
                media:'Github',
                id:'github',
                img:'https://picsum.photos/102'
                }}       
            />
        </ul>
    );
}
export default Social;