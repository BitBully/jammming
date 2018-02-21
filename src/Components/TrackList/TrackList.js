import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
    render() {
        // this.props.tracks.map(track => {
        //     console.log('\nIn TrackList.js: \n');
        //     console.log('     Track: ' + track.name + '\n');
        //     console.log('    Artist: ' + track.artist + '\n');
        //     console.log('     Album: ' + track.album + '\n\n');
        //       });

        let isRemoval = this.props.isRemoval;
        // console.log('In TrackList.js, "isRemoval is ' + this.props.isRemoval + '\n');

        return (
            <div className="TrackList">
                {this.props.tracks.map(track => {
                    return <Track key={track.id} track={track} isRemoval={isRemoval} />
                })}
            </div>
        );
    }
}

export default TrackList;