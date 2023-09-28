const firstName = document.getElementById('first-name');
const lastNAme = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const claimBtn = document.getElementById('claimBtn');
const pattern = /^[A-Za-z0-9._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2-6}$/

claimBtn.addEventListener('click', () => {
  function myfun(){
    if (pattern.test(email)){
      alert('Wrong Email');
    }
  }
})

claimBtn.addEventListener('click', () => {
  colsole.log('pizzy ace');
})




