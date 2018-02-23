import { clientID } from './SpotifyID';

let accessToken = '';
let expiresIn;
let redirectURI = 'http://localhost:3000/';
let requestURL = 'https://accounts.spotify.com/authorize?client_id=';
    requestURL += clientID;
    requestURL += '&response_type=token';
    requestURL += '&scope=playlist-modify-public';
    requestURL += '&redirect_uri=' + redirectURI;

const Spotify = {
    getAccessToken() {
        // console.log('[Spotify.getAccessToken]...' );

        // if we already have the token, just return it...
        if (accessToken !== '') {
            // console.log('    already had token...');
            return accessToken;
        }

        // no token yet, check the current URL...
        let responseURL = window.location.href;
        if (!responseURL.toLowerCase().includes('access_token=')) {
            // the URL does not include the token, so call for the token...
            window.location = requestURL;
            // ...and get the redirected URL.
            responseURL = window.location.href;            
        }

        let token = responseURL.match(/access_token=([^&]*)/);
        let expires = responseURL.match(/expires_in=([^&]*)/);
        // if the token was in the url, set it and return it...
        if (token !== null && expires !== null) {
            accessToken = token[1];
            expiresIn = expires[1];
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        }
        return accessToken;
    },

    search(term) {
        let aToken = this.getAccessToken();
        // console.log('[Spotify.search begin...]\n');
        // console.log('[   old term: ' + term + '\n');
        term = term.replace(/ /g,'+');
        // console.log('[   new term: ' + term + '\n');
        const url = `https://api.spotify.com/v1/search?type=track&q=${term}`;
        return fetch(url, {
            headers: {
                Authorization: `Bearer ${aToken}`
            }
        }).then(response => {
            if(response.ok) {
                // console.log('    response is OK\n');
                // console.log('    response is: ' + response);
                return response.json();
            }
            throw new Error('[Spotify.search] request failed!');
        }, networkError => {
            console.log(networkError.message);
        }).then(jsonResponse => {
            if (jsonResponse.tracks) {
                // console.log('jsonResonse.tracks.items: ' + jsonResponse.tracks.items);
                // jsonResponse.tracks.items.forEach(track => {
                //     console.log('  Track Info');
                //     console.log('        id: ' + track.id);
                //     console.log('      name: ' + track.name);
                //     console.log('    artist: ' + track.artists[0].name);
                //     console.log('     album: ' + track.album.name);
                //     console.log('       uri: ' + track.uri);
                //     console.log('\n\n');
                // });
                return jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }));
            }
        });
    }
};

export default Spotify;