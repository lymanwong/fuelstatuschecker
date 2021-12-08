let express = require('express');
let app     = express();
let path    = require("path");

// set static directories
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+ '/public/pages/index.html'));
});

let port = process.env.PORT || 1000;
app.listen(port);
console.log('Listening on port ', port);

