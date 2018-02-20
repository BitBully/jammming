import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
    render() {
        // console.log('\nIn TrackList: ' + this.props.tracks);

        // this.props.tracks.map(track => {
        //     console.log('\nIn TrackList.js: \n');
        //     console.log('  Track ID: ' + track.id + '\n');
        //     console.log('     Track: ' + track.name + '\n');
        //     console.log('    Artist: ' + track.artist + '\n');
        //     console.log('     Album: ' + track.album + '\n\n');
        //       });

        return (
            <div className="TrackList">
                {this.props.tracks.map(track => {
                    return <Track key={track.id} track={track} />
                })}
            </div>
        );
    }
}

export default TrackList;