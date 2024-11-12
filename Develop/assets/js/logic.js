// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function toggleDarkMode() {
  const body = document.body;
  const button = document.getElementById('toggle');
  body.classList.toggle('dark');

  localStorage.setItem('darkMode', body.classList.contains('dark'));

  if (body.classList.contains('dark')) {
    button.textContent = '☀️';
  } else {
    button.textContent = '☽';
  }
}
const toggleButton = document.getElementById('toggle');
toggleButton.addEventListener('click', toggleDarkMode);


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

// function readLocalStorage() {
// const info = localStorage.getItem('formData');
// const mode = localStorage.getItem('darkMode');
// const parsedInfo = info ? JSON.parse(info) : [];
// const parsedMode = mode ? JSON.parse(mode) : [];
// return [parsedInfo, parsedMode];
// }

// const result = readLocalStorage();
// console.log(result);

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

// function storeLocalStorage() {
// const existingData = localStorage.getItem('formData');
// const parsedData = existingData ? JSON.parse(existingData) : [];
// const updatedData = parsedData.concat(newData);


// localStorage.setItem('newData' , JSON.stringify(updatedData));
// return [updatedData, parsedMode];
// }

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
}
