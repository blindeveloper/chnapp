'use strict'

const request = require('request');

function getJokesList(cb) {
  request('http://api.icndb.com/jokes/random/10', function (err, res, body) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, body)
    }
  })
}

module.exports = { getJokesList }