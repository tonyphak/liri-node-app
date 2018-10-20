# liri-node-app
## Liri - a Language "Siri" App
User will be able to search for concerts, songs, and movies by typing commands in the command line in bash terminal
## Motivation
I wanted to create a Node.js that can search for songs, concerts, and movies using APIs from spotify, bands in town, and OMDb. Each API can be accessed when the correct command is used.
## Getting Started
Video of the Demo can be found here 
## Screenshots
1. To begin using Liri the user will need to start in the correct directory with the correct JS file. The screen below, the correct directory is liri-node-app and the program file is liri.js.
![Image of question screen](https://github.com/tonyphak/liri-node-app/blob/master/images/Correct%20folder%20with%20js%20app.png)
2. Once the user is in the correct directory, the user will need to enter the correct command to execute liri. In the screen below, the command is "node liri.js concert-this." This is the default command to search for concerts. The user will enter the name of the artist at the end of the default command to run the program. In this example, the user is searching for shaun mendes.
![Image correct answer screen](https://github.com/tonyphak/liri-node-app/blob/master/images/concert-this%20and%20search%20word.png)
3. The screen below shows the result, which shows the artist, venue, country, and date.
![Image of wrong answer screen](https://github.com/tonyphak/liri-node-app/blob/master/images/concert-this%20results.png)
4. At the bottom of the result, a message "info added to log!" appears confirming that the results are entered in the log.txt file.
![Image of out of time screen](https://github.com/tonyphak/liri-node-app/blob/master/images/concert-this%20log%20txt.png)
5. The screen below shows the command to search for song information. As shown at the top of the screen, the default command is "node liri.js spotify-this-song" and the song that is being searched is "in my blood." The results shows the artist, song title, song preview, and album. At the bottom, also confirms that the results were in entered in log.txt.
![Image of scoreboard screen](https://github.com/tonyphak/liri-node-app/blob/master/images/spotify-this-song%20result.png)
6. The screen below shows what happens if the users doesn't enter in a search parameter. The program will default the search to "The Sign" by Ace of Base.
![Image of question screen](https://github.com/tonyphak/liri-node-app/blob/master/images/spotify-this-song%20default%20result.png)
7. The screen below shows the liri command for movie search. As shown at the top, the default command is "node liri.js movie-this" followed by the name of the movie. The results will show the title of the movie, year, IMDb rating, rotten tomato rating, country, language, plot, and list of actors.
![Image correct answer screen](https://github.com/tonyphak/liri-node-app/blob/master/images/movie-this%20result.png)
8. The screen below shows an already existing txt file with a line to execute spotify and the name of the song.
![Image of wrong answer screen](https://github.com/tonyphak/liri-node-app/blob/master/images/random-txt.png)
9. When the command "node liri.js do-what-it-says" is entered, the program will run what is in the random.txt file. The results will show the same information when the spotify-this-song command is run.
![Image of out of time screen](https://github.com/tonyphak/liri-node-app/blob/master/images/do-what-it-says%20result.png)
10. The screen below shows the log.txt file with all the results entered in the txt file.
![Image of scoreboard screen](https://github.com/tonyphak/liri-node-app/blob/master/images/log%20txt%20all%20results.png)
## Technologies Used
* Node.js
* NPM
* JS
## Prerequisites
* Spotify NPM - https://www.npmjs.com/package/node-spotify-api (to access spotify npm)
* Moment NPM - https://www.npmjs.com/package/moment (to convert time and date)
* Request NPM to access bandsintown API and OMDb API - https://www.npmjs.com/package/request (request to access API without NPM)
* FS NPM - https://www.npmjs.com/package/file-system (to read files)
* Dotenv NPM - https://www.npmjs.com/package/dotenv (to access API keys from a file external to the js file)
## Built With
* Visual Studio Code: Editor
* Bash Terminal
## Authors
* Tony Phakasoum - Node.js/NPM/JS/API   - [Tony Phakasoum](https://github.com/tonyphak)

