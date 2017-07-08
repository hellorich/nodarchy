# nodarchy
Code test for Brilliant Noise

## Notes

I could have added more tests to validate the JSON object more thoroughly, or test error handling in routes/index.js
but I'm keeping it short and simple as requested.

Similarly there's nothing to sort the monarchs by chronology or name or anything, just a formatted table.

I've also not added anything to support older browsers although I've used 'let' rather than 'var'- I'll assume you'll be running the test in a modern browser :)

## Links

App: [nodarchy.herokuapp.com/](https://nodarchy.herokuapp.com/)
Repository: [github.com/hellorich/nodarchy](https://github.com/hellorich/nodarchy)

## Requirements

- Node.js
- Nodemon (optional)

## Installation

1. Install Node.js from installer at [nodejs.org](https://nodejs.org)
2. Install dependences with `npm install`

## Commands

- Run project: `npm start`
- Run project in debug: `DEBUG=nodarchy:* npm start`
- Optionally if you have **nodemon** you can run the project in debug with `DEBUG=express_example:* nodemon`

- Run tests: `npm test`
