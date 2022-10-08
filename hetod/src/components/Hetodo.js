import React, { Component } from 'react'
import Header from './My_website/Header';
import Team from './Team/OurTeam';


class Hetodo extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
               <Team />
            </div>
        );
    }
}
export default Hetodo;