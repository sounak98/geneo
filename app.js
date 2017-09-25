const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/public/views'));

app.get('/', function(req, res) {
    res.render('index', {
        title : "Geneo"
    });
});

app.listen(3000, function() {
    console.log("Server up and running at 3000");
});