"use strict";

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

let server = app.listen(3000, function() {
    let host = server.address().address,
        port = server.address().port;

    console.log('Server running at http://%s:%s', host, port);
});
