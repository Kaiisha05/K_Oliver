import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    state = {};
    render() {
        return (
            <div className="header">
                {this.props.title}
            </div>
        );
    }
}

export default Header;