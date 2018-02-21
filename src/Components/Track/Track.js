import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
    }

    renderAction() {
        // console.log('this.props.isRemoval: ' + this.props.isRemoval + '\n');
        if (this.props.isRemoval) {
            return <a className="Track-action">-</a>
        } else {
            return <a className="Track-action" onClick={this.addTrack} >+</a>
        }
    }

    addTrack() {
        // console.log('Track ID: ' + this.props.track.id + ', name: ' + this.props.track.name + '\n');
        this.props.onAdd(this.props.track);
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