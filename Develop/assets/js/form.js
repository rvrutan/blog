// TODO: Create a variable that selects the form element
const userForm = document.querySelector('blogform');
const nameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const errorMessage = document.getElementById('error');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function formSubmit(event) {
    event.preventDefault();
const username = nameInput.value;
const title = titleInput.value;
const content = contentInput.value;

if (username === '' || title === '' || content === '') {
    errorMessage.style.display = 'block';
    return;
} else {
    redirectPage('./blog.html');
}
}

localStorage.setItem('formData' , JSON.stringify({ name, title, content}));

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click' , formSubmit);