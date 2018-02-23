import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

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
      playlistName: 'New Playlist',
      playlistTracks: [
      ]
     };
     this.addTrack = this.addTrack.bind(this);
     this.removeTrack = this.removeTrack.bind(this);
     this.updatePlaylistName = this.updatePlaylistName.bind(this);
     this.savePlaylist = this.savePlaylist.bind(this);
     this.search = this.search.bind(this);
  }

  search(term) {
    console.log('[App.search] term is ' + term);
    let tkn = Spotify.getAccessToken();
    console.log('    token: ' + tkn + '\n');
  }

  addTrack(track) {
    let ndx = this.state.playlistTracks.findIndex(trk => trk.id === track.id);
    if (ndx < 0) { this.state.playlistTracks.push(track); }
    this.setState( { playlistTracks: this.state.playlistTracks } );
  }

  removeTrack(track) {
    this.setState( { playlistTracks: this.state.playlistTracks.filter(trk => trk.id !== track.id) });
  }

  updatePlaylistName(name) {
    this.setState( { playlistName: name });
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.id);
    console.log('[App.savePlaylist] trackURIs is ' + trackURIs);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} 
                      playlistTracks={this.state.playlistTracks} 
                      onRemove={this.removeTrack}
                      onNameChange={this.updatePlaylistName} 
                      onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
