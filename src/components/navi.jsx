import React, { Component } from 'react';

class Navi extends Component {
    render() {
        const {title, count} = this.props.navi;

        return (
            <>
                <i className="fa-solid fa-dog-leashed"></i>
                <span className="navi-title">{title}</span>
                <span className="navi-count">{count}</span>
            </>
        );
    }
}

export default Navi;