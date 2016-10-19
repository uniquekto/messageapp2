//bring in the necessary dependencies
var express = require('express');
var cors = require ('cors');
var bodyParser = require('body-parser');


// Configure the express web server framework
var app = express();
app.use(bodyParser.json());
app.use(cors());


//define the API routes for our application
app.get('/', function (req, res) {
  res.send('Hello World!');
});

var messages = [
  {
  username: "Mr A",
  message: "Hello"
  },
  {
    username: "Mr B",
    message: "Hello Mr A"
  }
];
//messages
//get
//posts

app.get('/messages', function (req, res) {
  res.json(messages);
});

app.post('/messages',  function (req, res) {
  messages.push({
    username:  req.body.username,
    message:  req.body.message
  });
  res.json(messages);
});


//Activate the express server
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port');
});
