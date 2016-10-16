var express = require('express');
var bodyParser = require('body-parser');
var cors = require ('cors');
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.get('/', function (req, res) {
  res.send('Hello World!');
    
});

var messages = [
        {
            username: "Mr A",
            message: " Hellow"
        },
        {
            username: "Mr B",
            message: " Hellow"
        }
        ];
   

app.get('/messages', function (req, res){
        res.json(messages);
        });
app.post('/messages',function (req, res){
        messages.push({
            username: req.body.username,
            message:req.body.message
        });
    res.json(messages);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});