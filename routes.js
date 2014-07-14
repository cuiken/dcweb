/**
 * Created by Ken.Cui on 2014/5/20.
 */
var urllib = require('urllib');
var config = require('./config');
var moment = require('moment');

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

    app.get('/terms', function (req, res) {
        res.render('terms_service');
    });

    app.get('/override', function (req, res) {
        res.render('override/override');
    });
    app.get('/events', function (req, res) {
        res.render('override/events');
    });
    app.get('/override-cal',function(req,res){
       res.render('override/override-cal');
    });
    app.get('/connect',function(req,res){
        res.render('override/connect');
    });

    app.get('/forgot-password', function (req, res) {
        res.render('forgot-password');
    });

    app.get('/profile', function (req, res) {
        res.render('profile');
    });

    app.get('/chart/CO2', function (req, res) {
        res.render('chart/CO2_yield_chart');
    });
    app.get('/chart/output', function (req, res) {
        res.render('chart/output_chart');
    });
    app.get('/chart/input', function (req, res) {
        res.render('chart/input_chart');
    });


    app.get('/stations', function (req, res) {
        res.render('stations');
    });
    app.get('/station/create', function (req, res) {
        res.render('add_station');
    });
    app.get('/photoWall', function (req, res) {
        res.render('override/photo_wall');
    });
    app.get('/photoWall-input', function (req, res) {
        res.render('override/photowall_input');
    });

    app.get('/config/equip', function (req, res) {
        res.render('config/equip');
    });
    app.get('/config/report', function (req, res) {
        res.render('config/report');
    });
    app.get('/config/share', function (req, res) {
        res.render('config/share');
    });
    app.get('/config/station', function (req, res) {
        res.render('config/station');
    });

    app.get('/admin/stations', function (req, res) {
        res.render('admin/stationList');
    });
    app.get('/admin/accounts', function (req, res) {
        res.render('admin/accountList');
    });
    app.get('/admin/dicts', function (req, res) {
        res.render('admin/dictList');
    });
    app.get('/admin/events', function (req, res) {
        res.render('admin/eventList');
    });
    app.get('/admin/invs', function (req, res) {
        res.render('admin/invList');
    });
    app.get('/admin/pmus', function (req, res) {
        res.render('admin/pmuList');
    });
    app.get('/admin/users', function (req, res) {
        res.render('admin/userList');
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
    app.get('/heatmap/datas-years.json', function (req, res, next) {

        var todaySec = moment() / 1000;
        var d0707 = moment('2014-07-07') / 1000;
        var d0606 = moment('2014-06-06') / 1000;
        var d0101 = moment('2014-01-01') / 1000;
        var d0523 = moment('2014-05-23') / 1000;
        var d0225 = moment('2014-02-25') / 1000;

        var ds = {};
        ds[todaySec] = 2.05;
        ds[d0101] = 40;
        ds[d0523] = 60;
        ds[d0606] = 80;
        ds[d0707] = 10;
        ds[d0225] = 120;

        res.json(ds);
    });
};