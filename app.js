const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];
    var date = new Date;
    var dayNumber = date.getDay();
    var day = days[dayNumber];
    // console.log(day);

    res.render('list', {weekday: day});
});


app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});