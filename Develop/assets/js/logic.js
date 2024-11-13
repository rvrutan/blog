const toggleButton = document.getElementById('toggle');
let redirectURL = "";

// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

// ! Use the following function whenever you need to redirect to a different page



function applyMode(mode) {

  document.body.classList = mode

  if (mode === 'dark') {
    toggleButton.textContent = '☀️';
  } else {
    toggleButton.textContent = '☽';
  }

}

function toggleMode() {

  const mode = readMode();
  let nextMode;

  if (mode === 'light') {
    nextMode = 'dark';
  } else {
    nextMode = 'light';
  } 

  applyMode(nextMode);

  saveMode(nextMode);
}



function readMode() {
  const mode = localStorage.getItem('mode') || 'light';
  return mode;
}

function saveMode(mode){
  localStorage.setItem('mode', mode);

}

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

toggleButton.addEventListener("click", toggleMode);

window.addEventListener('DOMContentLoaded' , () => {
  const mode = readMode();
  applyMode(mode);
});
