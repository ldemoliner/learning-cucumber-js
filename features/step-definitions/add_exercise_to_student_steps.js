const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const StudentBO = require('../../src/studentBO');


Given('the student {string} is registered', function (string) {
  
});


When('I associate the exercise {string}', function (string) {
  
});


Then('{string} should have the following exercise:', function (string, docString) {
  const exercises = JSON.parse(docString);
  console.log('AAAA',exercises);
});