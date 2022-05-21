require('dotenv').config()
var api = require('./api')

var express = require('express')
var app = express()

app.get('/user', api.checkAuth, (req, res) => {
    var id = req.query.id;
    
    api.formatUserData(id).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
})

app.get('/user/ext', api.checkAuth, (req, res) => {
    var id = req.query.id;
    
    api.getExtUserData(id).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
})

app.get('/bday', api.checkAuth, (req, res) => {
    var date = req.query.dd;
    var month = req.query.mm;

    api.getBdayUser(date, month).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
})

app.get('/bday/:mm', api.checkAuth, (req, res) => {
    var month = req.params.mm;

    api.getBdaysByMonth(month).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
})


app.listen(process.env.PORT | 5000, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
})