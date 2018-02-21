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
        // console.log('In Track.js, "isRemoval is ' + this.props.isRemoval + '\n');
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}

export default Track;