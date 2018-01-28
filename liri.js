var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var twitterApi = require("./keys.js");

var action = process.argv[2];

var client = new Twitter({
    consumer_key: twitterApi.consumer_key,
    consumer_secret: twitterApi.consumer_secret,
    access_token_key: twitterApi.access_token_key,
    access_token_secret: twitterApi.access_token_secret
});

switch (action) {
    case "spotify-this-song":
        searchSpot();
        break;
    case "my-tweets":
        twitterSpot();
        break;
}

function twitterSpot() {
    
    console.log(client);
    var params = {screen_name: 'royhhwang'};
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(JSON.stringify(tweets));
            console.log(response);
        }
            console.log('pls work');
            console.log(JSON.stringify(error));
    });
}