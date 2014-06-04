/**
 * Created by Ken.Cui on 2014/5/20.
 */
var urllib = require('urllib');
var config = require('./config');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('home');
    });
    app.get('/login', function (req, res) {
        res.render('login');
    });
    app.post('/login', function (req, res) {
        res.redirect('override');
    });
    app.get('/signup', function (req, res) {
        res.render('signup');
    });
    app.get('/override', function (req, res) {
        res.render('override');
    });
    app.get('/forgot-password', function (req, res) {
        res.render('forgot-password');
    });

    app.get('/events', function (req, res) {
        res.render('events');
    });
    app.get('/profile', function (req, res) {
        res.render('profile');
    });
    app.get('/CO2', function (req, res) {
        res.render('CO2_yield_chart');
    });
    app.get('/stations', function (req, res) {
        res.render('stations');
    });
    app.get('/photoWall', function (req, res) {
        res.render('photo_wall');
    });
    app.get('/powerInfo/:period/:date', function (req, res, next) {
        var period = req.params.period;
        var date = req.params.date;
        var url = config.host + 'stationPowerInfo?key=' + config.station_key + '&period=' + period + '&date=' + date;
        urllib.request(url, {dataType: 'json'}, function (err, data) {
            if (err) {
                return next(err);
            }
            res.json(data);
        });
    });
}