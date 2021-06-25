var express = require('express');
var app = express();

app.use('/assets/css', express.static(__dirname + '/assets/css'));
app.use('/assets/fonts', express.static(__dirname + '/assets/fonts'));
app.use('/assets/images', express.static(__dirname + '/assets/images'));
app.use('/assets/js', express.static(__dirname + '/assets/js'));

app.use('/vendor/bootstrap/css', express.static(__dirname + '/vendor/bootstrap/css'));
app.use('/vendor/bootstrap/js', express.static(__dirname + '/vendor/bootstrap/js'));
app.use('/vendor/jquery', express.static(__dirname + '/vendor/jquery'));


app.get('/health', function (req, res) {
  res.send('Healthy!');
});

app.get('', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.get('/index', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function (req, res) {
  res.sendFile(__dirname + '/contact.html');
});

app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/about.html');
});

app.get('/products', function (req, res) {
  res.sendFile(__dirname + '/products.html');
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Listening...');
});
