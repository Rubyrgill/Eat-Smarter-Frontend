/* eslint-disable */
var request = require('request');
var Meal = require('../models/meal');

module.exports = function(app, passport) {
  // Load index page

  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/signup', function(req, res) {
    res.render('signup'); //need signup.hbs
  });

  app.get('/login', function(req, res) {
    res.render('login'); // need login.hbs
  });

  app.post(
    '/signup',
    passport.authenticate('local-signup', {
      successRedirect: '/',
      failureRedirect: '/signup'
    }) // change successredirect
  );

  app.post(
    '/login',
    passport.authenticate('local-signin', {
      successRedirect: '/auth',
      failureRedirect: '/signin'
    })
  );

  app.get('/logout', function(req, res) {
    req.session.destroy(function(err) {
      res.redirect('/');
    });
  });

  // Render 404 page for any unmatched routes
  app.get('*', function(req, res) {
    res.render('404');
  });
};
