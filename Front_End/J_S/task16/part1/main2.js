const formElements = {
  name: document.getElementById("name"),
  age: document.getElementById("age"),
  email: document.getElementById("email"),
  language: document.getElementById("language"),
};

window.onload = () => {
  Object.keys(formElements).forEach((key) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
      formElements[key].value = savedValue;
    }
  });
};

Object.keys(formElements).forEach((key) => {
  formElements[key].addEventListener("input", () => {
    localStorage.setItem(key, formElements[key].value);
  });
});

window.addEventListener("beforeunload", () => {
  Object.keys(formElements).forEach((key) => {
    localStorage.removeItem(key);
  });
});
