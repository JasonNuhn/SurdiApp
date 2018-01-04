const express = require('express');
const bodyParser = require('body-parser');



const server = express();

server.use(bodyParser.json());

server.use()

server.listen(3000, () = console.log('running on port 3000'))