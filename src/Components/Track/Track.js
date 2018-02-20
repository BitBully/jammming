import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
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