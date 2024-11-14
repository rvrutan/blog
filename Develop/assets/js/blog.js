// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector('main');
const backButton = document.getElementById('back');
const cardElements = document.getElementById('mycards');
// TODO: Create a function that builds an element and appends it to the DOM

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

function loadCards() {
  const usersString = localStorage.getItem('users');
  const users = JSON.parse(usersString);

  users.forEach((user) => {
    cardElements.insertAdjacentHTML('beforeend',`<article> <h2>${user.title}</h2> <blockquote>${user.content}</blockquote> <p>Posted by: ${user.username}</p> </article>`);
  });
}

function goBack(){
redirectPage('./index.html');
};

backButton.addEventListener('click' , goBack);

document.addEventListener('DOMContentLoaded' , () => {
loadCards();
}); 