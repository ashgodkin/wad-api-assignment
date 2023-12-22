# wad-api-assignment

Name: Ashleigh Godkin 20071063

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
Get movie list from API.
Get movie/:id from API.
Get genres from API.
Get upcoming movies from API.
Login page (not working)

## Setup requirements.

Same as labs.

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

______________________
NODEENV=development
PORT=8080
HOST= localhost
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/upcoming | GET | Get upcoming movies
- /api/genres | GET genres

## Security and Authentication

Not implemented in app as not working.

## Integrating with React App

I followed the labs to integrate my app with my API and used POSTMAN to get API calls and make sure they were working, could not get getNowPlaying or getTrending to work in either POSTMAN or API and not sure why.

