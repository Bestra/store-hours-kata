"use strict";

let assert = require('chai').assert;
let restrictions = require('../src/restrictions');
let Restrictions = restrictions.Restrictions;
let Day = restrictions.Day;

describe('Restrictions', function() {
  it('prints all days separately if they have unique times', function() {
    let r = new Restrictions();

    r.list.push(new Day('Monday', '1:00', '2:00'));
    r.list.push(new Day('Tuesday', '2:00', '3:00'));
    r.list.push(new Day('Wednesday', '3:00', '4:00'));

    assert.equal(r.prettyList(), ["Monday: 1:00 - 2:00", "Tuesday: 2:00 - 3:00", "Wednesday: 3:00 - 4:00"]);
  })
});
