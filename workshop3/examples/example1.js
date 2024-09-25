if (condition) {
  // Code to run if condition is true
} else if (anotherCondition) {
  // Code to run if the first condition
  // is false and this one is true
} else {
  // Code to run if none of the
  // conditions are true
}

if (task === '') {
  // Shows an alert if the task is empty
  alert('Please enter a task.');
} else {
  // Logs the task if it's not empty
  console.log('Task added:', task);
}

let taskCount = 5;

if (taskCount > 3) {
  console.log('You have more than 3 tasks.');
} else {
  console.log('You have 3 or fewer tasks.');
}

let task = document.getElementById('taskInput').value;

if (task === '') {
  // Alerts the user if the task is empty
  alert('Task is required.');
} else if (task.length > 20) {
  alert('Task is too long.');
} else {
  console.log('Task is valid:', task);
}

function greet() {
  console.log('Hello, welcome to the workshop!');
}

greet();

function greet(name) {
  console.log('Hello, ' + name);
}

greet('Alice'); // Logs 'Hello, Alice'
greet('Bob'); // Logs 'Hello, Bob'

function greet(name) {
  // 'name' is a parameter
  console.log('Hello, ' + name);
}

greet('Alice'); // 'Alice' is an argument passed to the function
greet('Bob'); // 'Bob' is another argument

function addNumbers(a, b) {
  return a + b;
}

let sum = addNumbers(5, 3); // Stores the result (8) in the variable 'sum'
console.log(sum); // Logs 8 to the console

document
  .getElementById('taskForm')
  .addEventListener('submit', handleTaskSubmission);
