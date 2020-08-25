document.addEventListener("DOMContentLoaded", () => {
  // your code here
  buttonClick();
  addTask();
});

function buttonClick() {
  const button = document.querySelector("input[type=submit]");

  button.addEventListener("click", function(event) {
  });
}

function addTask() {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const input = document.getElementById("new-task-description");

    // const commentInput = document.createTextNode(`${input}.value`);
    const commentInput = event.target[0];

    const textBox = commentInput.value;
    const comment = document.createElement("li");
    comment.textContent = textBox;

    const commentsContainer =  document.getElementById("tasks");
    const list = commentsContainer.appendChild(comment);
    const button = document.createElement("button");
    button.innerHTML = "x"
    list.append(button);

    list.addEventListener("click", function() {
      list.remove();
    })

    commentInput.value = "";
 
  });
}




