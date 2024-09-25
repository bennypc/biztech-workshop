// Step 1: Validate the task length (max 50 characters)
function handleTaskSubmission(event) {
  event.preventDefault(); // Prevent the form from refreshing

  // Get the task input value
  let taskInputValue = document.getElementById('taskInput').value;

  if (taskInputValue.length > 20) {
    alert('Task is too long. Please limit it to 20 characters.');
  } else {
    // If valid, log the task to the console
    console.log('Task entered:', taskInputValue);

    // Clear the input field after submission
    document.getElementById('taskInput').value = '';
  }
}

// Step 2: Attach the event listener to the form
document
  .getElementById('taskForm')
  .addEventListener('submit', handleTaskSubmission);
