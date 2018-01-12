const express = require('express');
const bodyParser = require('body-parser');

const knex = require('./db.js');
const sqlite = require('sqlite3');
const port = process.env.PORT || 3001;
const cors = require('cors');
// var whitelist = [
//   "http://localhost:3000",
//   "http://localhost:3001",
//   // 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
// ];

// var corsOptions = {
//     origin: function(origin, callback){
//         var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
//         callback(null, originIsWhitelisted);
//     },
//     credentials: true
// };

// const server = express();

// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Request-Method", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Max-Age", "1728000");
//   res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
//   next();
// });
// server.use(cors(corsOptions));

//const cors = require('cors')
const server = express()

server.use(cors())

server.use(bodyParser.json());

server.listen(port, () => {
    console.log(`Server up and running on ${port}`);
  });

server.post('/Signup', function(req, res) {
  const { body:user } = req.body;
  // console.log(user);
  knex
    .insert(user)
    .into('users')
    .then(function(tag) {
      res.status(201).json({ tag: tag });
    })
    .catch(function(err) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        res.status(422).json({ error: 'The User already exist' });
      } else {
        res.status(500).json(err);
      }
    });
});

server.get('/Signup', function(req, res) {
  const users = knex('users')
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});