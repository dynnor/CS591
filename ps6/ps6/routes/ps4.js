//mongo for spotify application
var express = require('express');
var spotify = require('../models/access_token');

function getPlaylistsByName(name, callback) {
    spotify.getToken(function () {
        spotify.spotifyApi.searchPlaylists(name)
            .then(function (data) {
                playlists = [];
                for (var i = 0; i < data.body.playlists.items.length; i++) {
                    playlists.push([data.body.playlists.items[i].external_urls['spotify'], data.body.playlists.items[i].name]);
                }
                return callback(playlists);
            }, function (err) {
                console.log('Something went wrong!', err);
            });
    });
}
