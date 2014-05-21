/**
 * Created by Ken.Cui on 2014/5/20.
 */

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });
    app.get('/login', function (req, res) {
        res.render('login');
    });
}