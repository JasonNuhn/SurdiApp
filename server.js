const express = require('express');
const bodyParser = require('body-parser');

const knex = require('./db.js');
const sqlite = require('sqlite3');
const port = process.env.PORT || 3001;
const cors = require('cors');
const bcrypt = require('bcrypt');
//const middleWare = require('/middlewares');

const STATUS_USER_ERROR = 422;
const BCRYPT_COST = 11;

const server = express()

server.use(cors())

server.use(bodyParser.json());

server.listen(port, () => {
    console.log(`Server up and running on ${port}`);
  });


//  -----  User CRUD Operations -----

// POST request - addUser
server.post('/signup', function(req, res) {
  const { body:user } = req.body;
  // console.log(user);
  // if (!displayName) {
  //   middleWare.sendUserError('displayName undefined', res);
  //   return;
  // }
  // User.findOne({ displayName }, (err, user) => {
  //   if (err || user === null) {
  //     middleWare.sendUserError('No user found at that id', res);
  //     return;
  //   }
  //   const hashedPw = user.passwordHash;
  //   bcrypt
  //     .compare(password, hashedPw)
  //     .then((response) => {
  //       if (!response) throw new Error();
  //       req.session.displayName = displayName;
  //       req.user = user;
  //     })
  //     .then(() => {
  //       res.json({ success: true});
  //     })
  //     .catch((error) => {
  //       return middleWare.sendUserError('some message here', res);
  //     });
  // });

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
server.post('/question', function(req, res) {
  const { body:question } = req.body;
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
server.post('/answer', function(req, res) {
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