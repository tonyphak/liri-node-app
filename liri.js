require("dotenv").config();
var Spotify = require("node-spotify-api")
var moment = require("moment")
var request = require("request");
var fs = require("fs");
var command = process.argv[2];
var search = process.argv.slice(3).join(" ");
var divider =
    "\n------------------------------------------------------------\n\n";
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
            var date = body.datetime;
            var prettyDate = moment(date).format("MM/DD/YYYY");//Date of the Event (use moment to format this as "MM/DD/YYYY")
            var data = [
                "Artist Lineup: " + body.lineup,
                "Venue: " + body.venue.name,
                "Country, Cit: " + body.venue.country + ", " + body.venue.city,
                "Event Date: " + prettyDate
            ].join("\n\n");
            console.log(data);
        }
        textLog(data);
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
            var data = [
                "Artists: " + data.artists[0].name,
                "Song Title: " + data.name,
                "Song Preview: " + data.preview_url,
                "Album: " + data.album.name
            ].join("\n\n");
            console.log(data);
        }
        textLog(data);
    })
}

//OMDb callback function
function OMDb(movieName) {

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    console.log(queryUrl);

    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var body = JSON.parse(body);
            var data = [
                "Movie Title: " + body.Title,
                "Year Released: " + body.Year,
                "IMDB Rating: " + body.imdbRating,
                "Rotten Tomatoes Rating: " + body.Ratings[1].Value,
                "Country: " + body.Country,
                "Language: " + body.Language,
                "Plot: " + body.Plot,
                "Actors: " + body.Actors
            ].join("\n\n");
            console.log(data);
        }
        textLog(data);
    })
}

//do-what-it-says callback function
function doSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) throw err;
        var randomArr = data.split(",");
        spotify(randomArr[1]);
    });
}

//Bonus append information that is log to text file
function textLog(data) {
    fs.appendFile("log.txt", data + divider, function (err) {
        if (err) {
            console.log(err);
        } else {
            (console.log("Info added to log!"));
        }
    })
}
