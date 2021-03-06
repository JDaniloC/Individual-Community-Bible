import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';

import BooksIndex from '../BooksIndex';
import Login from '../Login';

import "./styles.css";

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            indexClass: "invisible",
            loginClass: "invisible"
        }

        this.loginComponent = createRef();
        this.closeBookComponent = this.handleBooks.bind(this);
    }

    handleBooks() {
        if (this.state.indexClass === "invisible") {
            this.setState({
                indexClass: "visible",
                loginClass: "invisible"
            })
        } else {
            this.setState({
                indexClass: "invisible"
            })
        }
    }

    handleLogin(evt) {
        evt.preventDefault();

        if (this.state.loginClass === "invisible") {
            this.setState({
                loginClass: "visible",
                indexClass: "invisible"
            })
        } else {
            this.setState({
                loginClass: "invisible"
            })
        }
    }

    render() {
        return (
            <>
                <ul className = "navbar">
                    <Link to = "/"> Início </Link> 
                    <li onClick = {(evt) => {this.handleLogin(evt)}}> 
                        Perfil 
                    </li>
                    <li onClick = {() => {this.handleBooks()}}> 
                        Livros 
                    </li>
                </ul>
                <section className = {this.state.loginClass} 
                    style = {{ maxWidth: "min(62em, 100vw)" }}>
                    <Login ref = {this.loginComponent} />
                </section>
                <section className = {this.state.indexClass}>
                    <BooksIndex
                        changeChapter = {this.props.changeChapter}
                        closeBookComponent = {this.closeBookComponent}
                    />
                </section>
            </>
        )
    }
}