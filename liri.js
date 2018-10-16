require("dotenv").config();
var Spotify = require('node-spotify-api')
var moment = require('moment')
var request = require("request");
var fs = require("fs");
var command = process.argv[2];
var search = process.argv.slice(3).join(" ");

//switch case below to call commands
//node liri.js concert-this <artist/band name here>
switch (command) {
    case "concert-this":
        if (search) {
            bands(search);
        } else {
            bands("taylor swift");
        }
        break;
    //node liri.js movie-this '<movie name here>
    case "movie-this":
        if (search) {
            OMDb(search);
        } else {
            OMDb("Spice World");
        }
        break;
    //node liri.js do-what-it-says
    case "do-what-it-says":
        doSays();
        break;
    //node liri.js spotify-this-song '<song name here>
    case "spotify-this-song":
        if (search) {
            spotify(search);
        } else {
            spotify("The Sign Ace of Base"); //If no song is provided then your program will default to "The Sign" by Ace of Base.
        }
        break;
}


//bandsintown callback function
function bands(artist) {
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=3c23ec0eb335a5c10b8f6691c2121940&date=upcoming";

    console.log(queryURL);

    request(queryURL, function (error, response, body) {
        if (!error && response.statusCode === 200) {

            //for an artist and render the following information about each event to the terminal:
            var body = JSON.parse(body)[0];
            console.log(body);
            console.log("=================================================================================");
            console.log("Search Results")
            console.log("\nArtist Lineup: "+body.lineup);
            console.log("Venue: "+body.venue.name); //Name of the venue
            console.log("Country, City: "+body.venue.country + ", " + body.venue.city);//Venue location
            var date = body.datetime;
            var prettyDate = moment(date).format("MM/DD/YYYY");//Date of the Event (use moment to format this as "MM/DD/YYYY")
            console.log("Event Date: "+prettyDate);
            console.log("==================================================================================");
        }
    });
}

//spotify callback function
function spotify(song) {
    var keys = require("./keys");
    var spotify = new Spotify(keys.spotify);

   
    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } else {
            var data = data.tracks.items[0];
            //console.log(data);
            console.log("=================================================================================");
            console.log("Search Results")
            console.log("\nArtist: " + data.artists[0].name);//Artist(s)
            console.log("Song Title: " + data.name);//The song's name
            console.log("Song Preview: " + data.preview_url);//A preview link of the song from Spotify
            console.log("Album: " + data.album.name);//The album that the song is from
            console.log("==================================================================================");
        }
    })
}

//OMDb callback function
function OMDb(movieName) {

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    console.log(queryUrl);

    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var body = JSON.parse(body);
            //console.log(body);
            console.log("=================================================================================");
            console.log("Search Results")
            console.log("\nMovie Title: " + body.Title);//Title of the movie.
            console.log("Year Released: " + body.Year);//Year the movie came out.
            console.log("IMDB Rating: " + body.imdbRating); //IMDB Rating of the movie.
            console.log("Rotten Tomatoes Rating: " + body.Ratings[1].Value);//Rotten Tomatoes Rating of the movie.
            console.log("Country: " + body.Country);//Country where the movie was produced.
            console.log("Language: " + body.Language);//Language of the movie.
            console.log("Plot: " + body.Plot);//Plot of the movie.
            console.log("Actors: " + body.Actors);//Actors in the movie.
            console.log("==================================================================================");
        }
    })
}

//do-what-it-says callback function

function doSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        //console.log(data);

        var randomArr = data.split(",");
        console.log(randomArr);
        spotify(randomArr[1]);
    })
}
