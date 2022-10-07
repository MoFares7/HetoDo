import React from "react";

function Body() {

    let choise = 'designer';
    let title = {
        designer: 'designer',
        programmer: 'programmer'
    }
   
    return (
        <p> this is my account use <h5 style={{ ...choise == 'designer' ? 'color: blue;' : 'color: red;' }}> {title.designer}</h5> or <h5>{title.programmer}</h5> it is up to client </p>

    );
}
export default Body;