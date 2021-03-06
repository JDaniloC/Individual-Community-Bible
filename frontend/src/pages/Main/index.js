import React, { Component } from 'react';
import { HelpButton } from "../../components/Partials";
import BooksIndex from "../../components/BooksIndex";
import Login from "../../components/Login";

import "./styles.css";

const logo = require("../../assets/logo.png")

export default class Main extends Component {
    render() {
        return (
            <div className="panel">
                <HelpButton/>
                <div className="logo-container">
                    <img src={logo} alt="logo"/>
                    <p> 
                        Compartilhe a mensagem de Deus <br/> com seus irmãos 
                    </p>
                    <Login ref = {this.loginComponent}/>
                </div>
                <BooksIndex/>
            </div>   
            )
    }
}