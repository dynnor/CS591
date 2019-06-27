var SpotifyWebApi = require('spotify-web-api-node');

var clientId = '0e1c6597dc824cfb9d9b279eb023f8cc';
var clientSecret = '949141d1d0844ef0b9819779bb6e29a4';

// credentials are optional and consult from https://www.npmjs.com/package/spotify-web-api-node
var spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret
});

// Retrieve an access token. consult from https://www.npmjs.com/package/spotify-web-api-node
function getToken(callback) {
    spotifyApi.clientCredentialsGrant().then(
        function (data) {
            console.log('The access token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);

            // Set the access token on the API object to use it in later calls
            spotifyApi.setAccessToken(data.body['access_token']);
            return callback();
        },
        function (err) {
            console.log('Something went wrong when retrieving an access token', err);
        }
    );
}

module.exports = {
    spotifyApi,
    getToken
};
