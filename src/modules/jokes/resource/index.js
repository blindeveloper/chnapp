'use strict'

const request = require('request');

function getJokes(amount, cb) {
  request(`http://api.icndb.com/jokes/random/${amount}`, function (err, res, body) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, body)
    }
  })
}

module.exports = { getJokes }