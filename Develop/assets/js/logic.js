const toggleButton = document.getElementById('toggle');
let redirectURL = "";

// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function applyMode(mode) {

  document.body.classList = mode

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

  saveMode(nextMode)
}


function readMode() {
  const mode = localStorage.getItem('mode') || "light";
  return mode;
}

function saveMode(mode){
  localStorage.setItem('mode', mode);
}









// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const info = localStorage.getItem("formData");
  const mode = localStorage.getItem("Mode");
  const parsedInfo = info ? JSON.parse(info) : [];
  const parsedMode = mode ? JSON.parse(mode) : [];
  return [parsedInfo, parsedMode];
}

const result = readLocalStorage();
console.log(result);

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

function storeLocalStorage(newData) {
  const [existingInfo, existingMode] = readLocalStorage();
  if (Array.isArray(newData)) {
    const updatedInfo = [...existingInfo, ...newData];
    localStorage.setItem("formData", JSON.stringify(updatedInfo));
  } else {
    const updatedInfo = [...existingInfo, ...newData];
    localStorage.setItem("formData", JSON.stringify(updatedInfo));
  }

  localStorage.setItem("Mode", JSON.stringify(existingMode));
}

// ! Use the following function whenever you need to redirect to a different page

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

toggleButton.addEventListener("click", applyMode);
