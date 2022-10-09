import { Component } from "react";


class Events extends Component {
    constructor() {
        super();

        this.state = { number: 0 }
        this.state = this.clickHandler.bind(this);

    }

    clickHandler() {
        this.setState(prevState => {
            return { number: prevState.number + 1 }
        })

    }

    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.clickHandler}>Click Now</button>

            </div>
        );

    }
}