import React, { Component } from 'react'
import Header from './Header';
import Body from './body';
import Social from './social';

class Hetodo extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <Body />
                <Social />
            </div>
        );
    }
}
export default Hetodo;