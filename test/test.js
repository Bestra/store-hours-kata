"use strict";

let assert = require('chai').assert;
let hours = require('../src/storeHours');

describe('Store hours display', function() {
  it('prints all days separately if they have unique times', function() {
    let hourList = [
      ['Monday', '1:00', '2:00'],
      ['Tuesday', '2:00', '3:00'],
      ['Wednesday', '3:00', '4:00']
    ];

    assert.equal(hours.prettyList(), ["Monday: 1:00 - 2:00", "Tuesday: 2:00 - 3:00", "Wednesday: 3:00 - 4:00"]);
  })
});
