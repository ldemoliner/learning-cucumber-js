const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const StudentBO = require('../../src/studentBO');


Given('{string} is registered', function (name) {
    StudentBO.registerStudent(name);
});

When('I consult {string}\'s data', function (name) {
    this.name = StudentBO.queryStudent(name);
});

Then('I should receive {string}', function (expectedName) {
    assert.equal(this.name, expectedName);
});