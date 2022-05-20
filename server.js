require('dotenv').config()
var api = require('./api')

var express = require('express')
var app = express()

app.get('/user', (req, res) => {
    var id = req.query.id;
    api.formatUserData(id).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
})

app.listen(process.env.PORT | 5000, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
})