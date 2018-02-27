import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction() {
        // console.log('this.props.isRemoval: ' + this.props.isRemoval + '\n');
        if (this.props.isRemoval) {
            return <a className="Track-action" onClick={this.removeTrack} >-</a>
        } else {
            return <a className="Track-action" onClick={this.addTrack} >+</a>
        }
    }

    addTrack() {
        // console.log('Add Track ID: ' + this.props.track.id + ', name: ' + this.props.track.name + '\n');
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        // console.log('Remove Track ID: ' + this.props.track.id + ', name: ' + this.props.track.name + '\n');
        this.props.onRemove(this.props.track);
    }

    render() {
        // console.log('In Track.js, "isRemoval is ' + this.props.isRemoval + '\n');
        return (
            <div className="Track">
                <div className="Track-information">
                    <a href={this.props.track.preview_url} target="_blank"><h3>{this.props.track.name}</h3></a>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}

export default Track;