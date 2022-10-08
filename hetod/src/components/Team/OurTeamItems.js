import React, { Component } from "react";

class OurTeamItem extends Component() {

    render() {
        return (
            <div className="col-md-4 col-sm-6">
                <div className="card">
                    <div className="card-header">
                        <img style={{ maxWidth: '100%' }} src={this.props.image}></img>
                    </div>
                    <div className="card-body" style={{
                        background: this.props.website
                            ? 'white' : 'green'
                    }}>
                        <h3>{this.props.name}</h3>
                        <p className="work">{this.props.work}</p>
                        <p className="Phone">{this.props.phone} </p>
                        <p className="Email">{this.props.email} </p>
                        <p className="Website">{this.props.website} </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurTeamItem;