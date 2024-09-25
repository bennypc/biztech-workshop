document
  .getElementById("taskForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the task input value
    let taskInputValue = document.getElementById("taskInput").value;

    // Log the input value to the console
    console.log("Task entered:", taskInputValue);
  });
