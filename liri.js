var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var twitterApi = require("./keys.js");

var action = process.argv[2];

switch (action) {
    case "spotify-this-song":
        searchSpot();
        break;
    case "my-tweets":
        twitterSpot();
        break;
}

function twitterSpot() {
    var client = new Twitter({
        consumer_key: 'NaeMTiRcFWHSieW4VMPEsjgN8 ',
        consumer_secret: 'h9GIEMzAM9lzDBFKTcrJiEojLewXPUoFRl9et73xLHEOQEUix1',
        access_token_key: '933414829628407810-kfw0L0ewwbQNJBhCMazgvPfvGugqrjM',
        access_token_secret: '0oW83l8UtfjAFu9h2des0sFHo36X3Fivm6cJQaEledr0r'
    });

    var params = { screen_name: 'royhhwang' };

    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets);
            console.log("Working");
        }
        console.log("Something's wrong");
    });
};


function searchSpot() {
    var nodeArgu = process.argv;
    var songName = "";

    for (var i = 3; i < nodeArgu.length; i++) {
        if (i > 3 && i < nodeArgu.length) {
            songName = songName + "+" + nodeArgu[i];
        }
        else {
            songName += nodeArgu[i];
        }
    }
    var spotify = new Spotify({
        id: '93bc5f856c4442f58eb44e47fd4a0455',
        secret: '2dfcff7ae9924e8886a409676509ab1d'
    });
    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data);
    })
};