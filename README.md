# Violet - A Better Listening Experience

## Summary - Project Description
Violet is a playlist building application. It allows users to import music from youtube. Playlists are not limited to music, user can upload anything from youtube and listen to it as an audio, including talk shows or lectures. It allows users to sign-up and login, modify user settings, create and edit playlists, add custom songs, or get songs from a search bar. The bread and butter of this app is the algorithm that makes suggestions for users on what they might like based on artist / and songs already added.


## Tech Stack
### Frontend
React, Bootstrap, Fontawesome, CSS, Custom API Middleware, Logo design. Testing using react-testing-libary Deployed Here https://capstone-project-two.onrender.com

### Backend
Node.js, Express, Jsonwebtoken authentication,  Custom API https://github.com/Centristy/violet-backend, Credits: Deezer API - https://developers.deezer.com/, https://rapidapi.com/420vijay47/api/youtube-mp3-downloader2/, JSON schema verification, SQL Database, (Hosted at ElphantSQL). Bcyrpt -Hashed password security, axios, pg and psql. Deployed Here --> https://violet-backend.onrender.com

## Features

### Secure User Sign-in / Sign-up
User routes are protected using jsonwebtokens, and bcrypt hashed passwords. 

### Search Bar
The search bar is the quickest way to add music which works with mixed queries, or any combination of title, artist or album. Search bar auto loads all data from Deezer API (Note: songs are in demo mode and are only 30 seconds long. In a production website, they'd be the full songs) The search bar loads the song into a list, and each song has add song + icon next to it, making it easy to add.

### Password Toggle
Allows people to toggle the password bar to see what they're typing in, or if they prefer to keep their password hidden from people watching their screens. 

### Dynamic navigation bar and homepage
Navigation bar updates based on whether user is logged in or not. Their is an explore page which uses the song suggestion algorithm in it

### Play list customization
Users can create empty play lists with a title and description which will allow them to categorize them. Users can also edit the description and title, keeping the audio tracks intact

### Song information Toggle icon
There is a information icon next to each song so that the user can know the artist and album of the song.

### Custom Song add Form
If you can't find the song using the search bar, or would prefer a more customized play list. You can add songs in a more detailed way. This would be good for artists that are making their own music and would like to keep a list of work in progresses. 


##Developer Offline Deployment

### Backend
1) The database file can be seeded from violet.sql (Use PSQL < violet.sql on the command line)

2) Backend runs on localhost:10000, but can be set to users preferences.

3) There are additional API features that are not used in the front end. For example: you make GET requests for singular song information.

4) To run you can uses npm start - or npm run dev (for development mode using nodemon)


### Frontend
1) To deploy front end, npm start on the command line. Also note the api middleware will need to be modified for offline developers

2) All tests are run using npm test on the command line.




## Future development
1) Allow users to change password / have a forgotten password system in place.

2) Put user authentication before allowing queries.

3) Allow users to delete their own accounts.

4) Optional - Interface is currently in darkmode only, build a light mode toggle for our more optimistic early-bird users.

5) Write tests for violet-backend.

6) Add genre based suggestions in the explorer page


### Dedication

I'd like to thank my supportive husband Chris Lee for being so patient with me for these past few months. I know I couldn't have done it without his support!