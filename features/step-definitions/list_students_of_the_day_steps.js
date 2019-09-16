const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const StudentBO = require('../../src/studentBO');


Given('today is {string}', function (day) {
    this.day = day;
});

Given('this is the cronogram of the week', function (docString) {
    const cronogram = JSON.parse(docString);
    StudentBO.setCronogram(cronogram)
});

When('I list all the students of today', function () {
    this.students = StudentBO.getStudentsOfToday(this.day)
});


Then('I should receive', function (docString) {
    const result = JSON.parse(docString);
    assert.equal(this.students, result);
});
       