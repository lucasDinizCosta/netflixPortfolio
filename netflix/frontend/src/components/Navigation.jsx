import React, { Component } from 'react';
import Logo from './Logo';

import './Navigation.css';

export default class Navigation extends Component {
    render(){
        return(
            <div className="navigation">
                <Logo />
                <nav>
                    <a href="#" className="nav-item">Home</a>
                    <a href="#" className="nav-item">TV Shows</a>
                    <a href="#" className="nav-item">About</a>
                </nav>
            </div>
        )
    }

    // toggleNavigation = () => {
    //     const navElement = document.querySelector('.nav-item');
    //     // navElement.classList
    //     // navigation.classList.toggle('navigation--open');
    //     console.log("teste", navElement.classList);
    // }
}