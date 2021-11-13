const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var items = ['Buy food', 'Cook food', 'Eat food'];
var newItem = "";

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function (req, res) {
    // newItem = '<li>' + req.body.newItem + '</li>';
    items.push(req.body.newItem);
    res.redirect('/');
});

app.get('/', function (req, res) {
    // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];
    var today = new Date;
    // var dayNumber = today.getDay();
    // var day = days[dayNumber];

    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    var day = today.toLocaleDateString('nl-NL', options)

    res.render('list', {weekday: day, listItems: items});
});


app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});