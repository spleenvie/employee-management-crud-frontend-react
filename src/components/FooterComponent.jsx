import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

class FooterComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted"> Tous droits réservés 2023 @NeemesisWeb </span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;