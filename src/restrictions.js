"use strict";

module.exports.Day = class Day {
  constructor(day, startTime, endTime, isActive) {
    this.day = day;
    this.startTime = startTime;
    this.endTime = endTime;
    this.isActive = isActive;
  }
};

module.exports.Restrictions = class Restrictions {
  constructor() {
    this.list = [];
  }

  prettyList() {
    return "Implement me";
  }
};



