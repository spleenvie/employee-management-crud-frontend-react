import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://neemesisweb.com/">Employee Management System</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;