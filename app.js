require('dotenv').config();

const express = require('express');
const app     = express();
const path    = require("path");
const cors    = require("cors");
const corsOptions = {
    origin:"*",
    credentials:true,
    optionSuccessStatus:200,
}

app.use(cors(corsOptions));

// set static directories
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+ '/public/pages/index.html'));
});

let port = process.env.PORT;
app.listen(port);
console.log(`Listening on ${process.env.PORT}`);
