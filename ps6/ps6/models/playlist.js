var express = require('express');
var spotify = require('../models/access_token');



function findPlaylist(mood) {
    const playlist_search = spotifyApi.searchPlaylists(mood)
        .then(function (data) {
            return data.body.items;
        }, function (err) {
            return err;
        });
}
module.exports = router;
