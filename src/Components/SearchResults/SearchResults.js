import React, { Component } from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends Component {
    render() {
        // console.log('\nIn SearchResults.js: ' + this.props.searchResults);
        let isRemoval = false;
        return (
            <div className="SearchResults">
                <h2>Results (SearchResults.js)</h2>
                <TrackList tracks={this.props.searchResults} isRemoval={isRemoval} onAdd={this.props.onAdd} />
            </div>
        );
    }
}

export default SearchResults;