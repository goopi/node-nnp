/**
 * Routes.
 */

module.exports = function(app){
  app.get('/', root);
};

/*
 * root.
 */

var root = function(req, res){
  res.render('index', { layout: true });
};
