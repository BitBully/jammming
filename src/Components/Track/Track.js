import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
    renderAction() {
        if (this.props.isRemoval) {
            return <a className="Track-action">-</a>
        } else {
            return <a className="Track-action">+</a>
        }
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>track name</h3>
                    <p>artist | album</p>
                </div>
                <a className="Track-action">+ or -</a>
            </div>
        );
    }
}

export default Track;