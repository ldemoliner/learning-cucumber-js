const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const students = []

Given('{string} is registered', function (name) {
    students.push(name);
});

When('I consult {string}\'s data', function (name) {
    this.name = students.find(student => student == name);
});

Then('I should receive {string}', function (expectedName) {
    assert.equal(this.name, expectedName);
});