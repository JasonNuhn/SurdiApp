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


//  -----  User CRUD Operations -----

// POST request - addUser
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

// GET request - users
server.get('/users', function(req, res) {
  const users = knex('users')
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

// GET request - userId
server.get('/user/:id', function(req, res) {
  const { id } = req.params;
  
  const users = knex('users')
    .where('id', id)
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

// PUT request
server.put('/user/:id', function(req, res) {
  const { id } = req.params;
  
  const users = knex('users')
    .where('id', id)
    .update(req.body)
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

// DELETE request
server.delete('/user/:id', function(req, res) {
  knex('users')
    .where('id', req.params.id)
    .delete()
    .then(function(count) {
      res.status(200).json({ deleted: count });
    })
    .catch(function(err) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        res.status(422).json({ error: 'The User does not exist' });
      } else {
        res.status(500).json(err);
      }
    });
});

//  -----  Question CRUD Operations -----

// POST request
server.post('/Question', function(req, res) {
  const question = req.body;
  // console.log(user);
  knex
    .insert(question)
    .into('questions')
    .then(function(tag2) {
      res.status(201).json({ tag2: tag2 });
    })
    .catch(function(err) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        res.status(422).json({ error: 'The Question already exist' });
      } else {
        res.status(500).json(err);
      }
    });
});

// GET request - questions
server.get('/questions', function(req, res) {
  const questions = knex('questions')
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

// GET request - questionId
server.get('/question/:id', function(req, res) {
  const { id } = req.params;
  
  const questions = knex('questions')
    .where('id', id)
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

// PUT request
server.put('/question/:id', function(req, res) {
  const { id } = req.params;
  
  const questions = knex('questions')
    .where('id', id)
    .update(req.body)
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

// DELETE request
server.delete('/question/:id', function(req, res) {
  knex('questions')
    .where('id', req.params.id)
    .delete()
    .then(function(count) {
      res.status(200).json({ deleted: count });
    })
    .catch(function(err) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        res.status(422).json({ error: 'The Question does not exist' });
      } else {
        res.status(500).json(err);
      }
    });
});

//  -----  Answer CRUD Operations -----

// POST request
server.post('/Answer', function(req, res) {
  const answer = req.body;
  // console.log(user);
  knex
    .insert(answer)
    .into('answers')
    .then(function(tag3) {
      res.status(201).json({ tag3: tag3 });
    })
    .catch(function(err) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        res.status(422).json({ error: 'The Answer already exist' });
      } else {
        res.status(500).json(err);
      }
    });
});

// GET request - answers
server.get('/answers', function(req, res) {
  const answers = knex('answers')
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

// GET request - answerId
server.get('/answer/:id', function(req, res) {
  const { id } = req.params;
  
  const answers = knex('answers')
    .where('id', id)
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

server.put('/answer/:id', function(req, res) {
  const { id } = req.params;
  
  const answers = knex('answers')
    .where('id', id)
    .update(req.body)
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

// DELETE request
server.delete('/answer/:id', function(req, res) {
  knex('answers')
    .where('id', req.params.id)
    .delete()
    .then(function(count) {
      res.status(200).json({ deleted: count });
    })
    .catch(function(err) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        res.status(422).json({ error: 'The Answer does not exist' });
      } else {
        res.status(500).json(err);
      }
    });
});