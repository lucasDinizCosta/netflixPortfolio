import React, { Component } from 'react';

import logo from '../assets/images/netflix_official_logo_icon.svg';
import './Logo.css';

export default class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
        );
    }
}