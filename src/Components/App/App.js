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
      ]
     };
    //  console.log('\nthis.state.searchResults: \n');
    //  this.state.searchResults.map(track => {
    //   console.log('     Track: ' + track.name + '\n');
    //   console.log('    Artist: ' + track.artist + '\n');
    //   console.log('     Album: ' + track.album + '\n\n');
    //  });


  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
