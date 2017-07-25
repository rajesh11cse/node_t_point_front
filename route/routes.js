'use strict';

/*
 * File : route/routes.js
 */

// load all the things we need
var path = require('path');

var appRouter = function (app) {

  // Default API
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '', '../index.html'));
  });

}

module.exports = appRouter;