import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            term: ''
        };

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search() {
        // console.log('[SearchBar.search] term is ' + this.state.term + '\n');
        this.props.onSearch(this.state.term);
    }

    handleTermChange(e) {
        // console.log('[SearchBar.handleTermChange] term was ' + this.state.term + '\n');
        this.setState( { term: e.target.value });
        // console.log('[SearchBar.handleTermChange] term now ' + this.state.term + '\n');
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
                <a onClick={this.search}>SEARCH</a>
            </div>
        );
    }
}

export default SearchBar;