import { clientID } from './SpotifyID';

let accessToken;
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
        // console.log('    requestURL: ' + requestURL + '\n');
        // console.log('    responseURL: ' + responseURL + '\n');
        // if we already have the token, just return it...
        if (accessToken !== undefined) {
            console.log('    already had token...');
            return accessToken;
        }

        // no token yet, check if it's just been returned...
        // let responseURL = 'https://example.com/callback#access_token=asdfasdfasdf&token_type=Bearer&expires_in=3600';
        let responseURL = window.location.href;
        let token = responseURL.match(/access_token=([^&]*)/);
        let expires = responseURL.match(/expires_in=([^&]*)/);
        // if the token was in the url, set it and return it...
        if (token !== null && expires !== null) {
            accessToken = token[1];
            expiresIn = expires[1];
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else { // make the call and get the token...
            window.location = requestURL;
            return null;
        }
    }
}

export default Spotify;