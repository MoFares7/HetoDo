import React, { Component } from "react";
import OurTeamItem from "./OurTeamItems";
import memberInfo from "./info_data";


class Team extends Component {

    constructor() {
        super()
        this.state = {
            memberInfo: memberInfo,
            members: [],
        }
        this.clickEvent = this.clickEvent.bind(this)
    }

    clickEvent() {
     
        this.state.members.push(this.state.memberInfo[1])
        this.newMembers = this.state.members.map(
            member =>
                <OurTeamItem
                    key={member.id}
                    name={member.name}
                    image={member.image}
                    phone={member.phone}
                    email={member.email}
                    website={member.website}
                />);
    }

    render() {
        return (
            <div className="row ">
                <button className="btn btn-primary btn-lg btn-block" onClick={this.clickEvent}>Add Employee</button>
                {this.members}
            </div>
        )
    }
}

export default Team;