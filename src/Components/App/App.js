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
        { name: 'El Paso', artist: 'Marty Robbins', album: 'Gunfighter Ballads And Trail Songs' },
        { name: 'Big Iron', artist: 'Marty Robbins', album: 'Gunfighter Ballads And Trail Songs' },
        { name: 'Faleena', artist: 'Marty Robbins', album: 'The Drifter' },
        { name: 'Mr. Shorty', artist: 'Marty Robbins', album: 'The Drifter' }
      ],
      playlistName: 'Late Night Alt 2',
      playlistTracks: [
        { name: 'Cups', artist: 'Anna Kendrick', album: 'Ultimate Pitch Perfect (Original Soundtrack' },
        { name: 'Jar of Hearts', artist: 'Christina Perri', album: 'lovestrong' },
        { name: 'Golden Ring', artist: 'George Jones, Tammy Wynette', album: 'George Jones and Tammy Wynette' }
      ]
     };
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
