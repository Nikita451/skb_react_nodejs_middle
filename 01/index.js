'use strict'

let express = require('express'),
    app = express(),
    cors = require('cors');

app.use(cors());

app.get("/", (req, res) => {
    let a = parseFloat(req.query.a) || 0,
        b = parseFloat(req.query.b) || 0,
        result = a + b;
    res.statusCode = 200;
    res.end(result.toString());
})

app.listen(3000)