import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { id: 1, name: 'El Paso', artist: 'Marty Robbins', album: 'Gunfighter Ballads And Trail Songs' },
        { id: 2, name: 'Big Iron', artist: 'Marty Robbins', album: 'Gunfighter Ballads And Trail Songs' },
        { id: 3, name: 'Faleena', artist: 'Marty Robbins', album: 'The Drifter' },
        { id: 4, name: 'Mr. Shorty', artist: 'Marty Robbins', album: 'The Drifter' },
        { id: 5, name: 'Cups', artist: 'Anna Kendrick', album: 'Ultimate Pitch Perfect (Original Soundtrack' },
        { id: 6, name: 'Jar of Hearts', artist: 'Christina Perri', album: 'lovestrong' },
        { id: 7, name: 'Golden Ring', artist: 'George Jones, Tammy Wynette', album: 'George Jones and Tammy Wynette' }
      ],
      playlistName: 'Late Night Alt 2',
      playlistTracks: [
        { id: 5, name: 'Cups', artist: 'Anna Kendrick', album: 'Ultimate Pitch Perfect (Original Soundtrack' }
      ]
     };
     this.addTrack = this.addTrack.bind(this);
     this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    // console.log('In "App.addTrack()", track ID is ' + track.id + '\n');
    let trkId = track.id;
    let trkNdx = this.state.playlistTracks.filter(trk => {
      return (trkId === trk.id);
    });
    if (trkNdx.length < 1) {
      this.state.playlistTracks.push(track);
    };
    this.setState( { playlistTracks: this.state.playlistTracks } );
  }

  removeTrack(track) {
    // let trkId = track.id;
    let newList = this.state.playlistTracks.filter(trk => trk.id !== track.id);
    this.setState( { playlistTracks: newList } );

  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
