import React, { Component } from "react";
import OurTeamItem from "./OurTeamItems";
import memberInfo from "./info_data";


class Team extends Component {

    constructor() {
        super()
        this.state = {
            memberInfo: memberInfo,
            members: [],
            index: 0,
        }
        this.clickEvent = this.clickEvent.bind(this)
    }

    clickEvent() {

        if (this.state.index < this.state.memberInfo.length) {
            this.state.members.push(this.state.memberInfo[this.state.index]);
            this.setState(
                function (lastIndex) {
                    return {
                        index: lastIndex.index + 1
                    }
                }
            );
            console.log(this.state.members);
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

    }

    render() {
        return (
            <div className="row ">
                <button className="btn btn-primary btn-lg btn-block" onClick={this.clickEvent}>Add Employee</button>
                {this.newMembers}
            </div>
        )
    }
}

export default Team;