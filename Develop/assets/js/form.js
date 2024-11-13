// TODO: Create a variable that selects the form element
const userForm = document.querySelector("blogform");
const nameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const errorMessage = document.getElementById("error");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function formSubmit(event) {
  event.preventDefault();

  const user = {
    username: nameInput.value,
    title: titleInput.value,
    content: contentInput.value,
  };

  if (
    nameInput.value === "" ||
    titleInput.value === "" ||
    contentInput.value === ""
  ) {
    errorMessage.style.display = "block";
    return;
  } else {
    errorMessage.style.display = "none";
  }
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  

  redirectPage("./blog.html");
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener("click", formSubmit);
