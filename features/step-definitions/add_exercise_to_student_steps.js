const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const StudentBO = require('../../src/studentBO');
const ExerciseBO = require('../../src/exerciseBO');

Given('the student {string} is registered', function (name) {
  StudentBO.registerStudent(name);
});

When('I assign the exercise {string} to {string}', function (exercise, student) {
  ExerciseBO.assignExercise(student, exercise);
});

Then('{string} should have the following exercise:', function (student, docString) {
  const exercises = JSON.parse(docString);
  student = StudentBO.queryStudent(student);
  assert.equal(exercises, student.exercises);
});