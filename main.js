const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const claimBtn = document.getElementById('claimBtn');

claimBtn.addEventListener('click', e => {
  e.preventDefault();

  var firstN = firstName.value.trim();
  var lastN = lastName.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value.trim();

  if(firstN === ''){
    errorFunc(firstName, 'First Name cannot be empty');
  }else{
    successFunc(firstName);
  }

  if(lastN === ''){
    errorFunc(firstName, 'Last Name cannot be empty');
  }else{
    successFunc(firstName);
  }

  if(emailValue === ''){
    errorFunc(firstName, 'email Name cannot be empty');
  }else{
    successFunc(firstName);
  }

  if(passwordValue === ''){
    errorFunc(firstName, 'passowrd cannot be empty');
  }else{
    successFunc(firstName);
  }
})

function errorFunc(req, message){
  const formControl = req.parentElement;
  const span = formControl.querySelector('span');
  span.innerText = message;
  req.className += 'error';
  span.className += 'error-text';
}

function successFunc(req){
  req.className == 'sucess';
}





