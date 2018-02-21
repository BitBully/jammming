import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends Component {
    render() {
        let isRemoval = true;
        return (
            <div className="Playlist">
                <input defaultValue={this.props.playlistName}/>
                <TrackList tracks={this.props.playlistTracks} isRemoval={isRemoval} onRemove={this.props.onRemove} />
                <a className="Playlist-save">SAVE TO SPOTIFY</a>
            </div>
        );
    }
}

export default Playlist;