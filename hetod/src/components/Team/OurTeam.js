import React, { Component } from "react";
import OurTeamItem from "./OurTeamItems";
import memberInfo from "./info_data";


class Team extends Component {

    constructor() {
        super()
        this.state = {
           memberInfo: memberInfo
        }
    }
    mapping(x) {
        const members = x.map(
            member =>
                <OurTeamItem
                    key={member.id}
                    name={member.name}
                    image={member.image}
                    phone={member.phone}
                    email={member.email}
                    website={member.website}
                />);
        return members;

    }

    render() {

        return (
            <div className="row ">
                {this.mapping(this.state.memberInfo)}
            </div>
        )
    }


}

export default Team;