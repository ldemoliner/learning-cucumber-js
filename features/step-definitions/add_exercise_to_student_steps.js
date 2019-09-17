const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const StudentBO = require('../../src/studentBO');
const ExerciseBO = require('../../src/exerciseBO');


Given('the student {string} is registered', function (name) {
  ExerciseBO.registerExercise(name);
});


When('I associate the exercise {string}', function (exercise) {
  this.exercise = ExerciseBO.queryExercise(exercise);
});


Then('{string} should have the following exercise:', function (string, docString) {
  const exercises = JSON.parse(docString);
  assert.equal(this.exercises, docString);
});