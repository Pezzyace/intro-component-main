const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const claimBtn = document.getElementById('claimBtn');
const error = document.getElementById("error");
const firstNameErrorMessage = document.getElementById("firstNameErrorMessage");
const lastNameErrorMessage = document.getElementById("lastNameErrorMessage");
const emailErrorMessage = document.getElementById("emailErrorMessage");
const passwordErrorMessage = document.getElementById("passwordErrorMessage");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const form = document.getElementById('form');


form.addEventListener("submit", function (e) {
  e.preventDefault();
   
  const namePattern = /^[A-Za-z\s]+$/;
  if (!namePattern.test(firstName.value.trim())) {
      firstName.classList.add("err");
      firstNameError.style.display = "inline-block";
      firstNameErrorMessage.style.display = "block";
  } else {
      firstName.classList.remove("err");
      firstNameError.style.display = "none";
      firstNameErrorMessage.style.display = "none";
  }

  if (!namePattern.test(lastName.value.trim())) {
    lastName.classList.add("err");
    lastNameError.style.display = "inline-block";
    lastNameErrorMessage.style.display = "block";
  } else {
    lastName.classList.remove("err");
    lastNameError.style.display = "none";
    lastNameErrorMessage.style.display = "none";
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email.value.trim())) {
      email.classList.add("err");
      emailError.style.display = "inline-block";
      emailErrorMessage.style.display = "block";
  } else {
      email.classList.remove("err");
      emailError.style.display = "none";
      emailErrorMessage.style.display = "none";
  }

  if (password.value.length < 6) {
      password.classList.add("err");
      passwordError.style.display = "inline-block";
      passwordErrorMessage.style.display = "block";
  } else {
      password.classList.remove("err");
      passwordError.style.display = "none";
      passwordErrorMessage.style.display = "none";
  }
});





