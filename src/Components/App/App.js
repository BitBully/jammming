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
     Spotify.getAccessToken();
  }

  search(term) {
    // console.log('[App.search] term is ' + term);
    if (term === '') {
      this.setState( { searchResults: [] } );
    } else {
      Spotify.search(term).then(searchResults => { this.setState({ searchResults: searchResults });});
    }
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
    // console.log('[App.savePlaylist] trackURIs is ' + trackURIs);
    Spotify.savePlaylist(this.state.playlistName,trackURIs);
    this.setState( { playlistName: 'New Playlist' } );
    this.updatePlaylistName('New Playlist');
    this.setState( { searchResults: [] } );
    this.setState( { playlistTracks: [] } );
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
