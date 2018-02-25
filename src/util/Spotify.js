import { clientID } from './SpotifyID';

let userID = '';
let accessToken = '';
let expiresIn;
let scopes = 'playlist-modify-private playlist-modify-public';
let redirectURI = 'http://localhost:3000/';
let requestURL = 'https://accounts.spotify.com/authorize?client_id=';
    requestURL += clientID;
    requestURL += '&response_type=token';
    requestURL += '&scope=' + encodeURIComponent(scopes);
    requestURL += '&redirect_uri=' + redirectURI;

// [Spotify.getAccessToken] requestURL: https://accounts.spotify.com/authorize?client_id=removed&response_type=token&scope=playlist-modify-private%20playlist-modify-public&redirect_uri=http://localhost:3000/

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
            // console.log('[Spotify.getAccessToken] requestURL: ' + requestURL);
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
        if (aToken !== '') {
            userID = this.getUserID();
        }

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
    },

    getUserID() {
        if (userID !== '') {
            return userID;
        }

        let aToken = this.getAccessToken();
        let headers = {
            'headers': {
               'Authorization': 'Bearer ' + aToken
            }
        };
        const url = `https://api.spotify.com/v1/me`;
        fetch(url,headers).then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error('[Spotify.me] request failed!');
        }, networkError => {
            console.log(networkError.message);
        }).then(jsonResponse => {
            if (jsonResponse.id) {
                // console.log('[Spotify.savePlaylsit] jsonResponse.id: ' + jsonResponse.id);
                userID = jsonResponse.id;
                return jsonResponse.id;
            }
        });
    },

    savePlaylist(name,tracks) {
        // check parameters...
        if (name.trim().length === 0 || tracks.length === 0) {
            // console.log('[Spotify.savePlaylist] name, tracks, or both are empty!');
            return null;
        } else {
            // console.log('[Spotify.savePlaylist] saving playlist: ' + name );
            // return null;
        }

        // get user id
        // I'm getting the userID in the search() funtion above so that it gets
        // returned in time for the savePlaylist() use...
        // console.log('[Spotify.savePlaylist] got user id: ' + userID);

        // create new playlist
        let aToken = this.getAccessToken();
        const url2 = `https://api.spotify.com/v1/users/${userID}/playlists`
        let postBody = { 'name': name };
        // console.log('[Spotify.savePlaylist] postBody: ' + JSON.stringify(postBody));
        fetch(url2, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + aToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        }).then(response => {
            if(response.ok){
                // console.log('[Spotify.savePlaylist] create response OK!');
                return response.json();
            } else {
                // console.log('[Spotify.savePlaylist] response: ' + JSON.stringify(response));
            }
            throw new Error('[Spotify.savePlaylist] create: Request failed!');
        }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            if (jsonResponse.id) {
                let playlistID = jsonResponse.id;
                // console.log('[Spotify.savePlaylist] Playlist created, ID is ' + playlistID + '...');
                // console.log('[Spotify.savePlaylist] Adding tracks...');
                // add tracks to playlist
                const url3 = `https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`;
                let uris = tracks.map(track => 'spotify:track:' + track);
                // console.log('track list: ' + uris);
                postBody = { 'uris': uris };
                // console.log('json postBody: ' + JSON.stringify(postBody));
                fetch(url3, {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + aToken,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postBody)
                }).then(response => {
                    if(response.ok){
                        return response.json();
                    }
                    throw new Error('Request failed!');
                }, networkError => console.log(networkError.message))
            }
        })
    }
};

export default Spotify;