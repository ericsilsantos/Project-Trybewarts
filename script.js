const receiveEmail = document.getElementById('email');
const receivePassword = document.getElementById('password');
const btn = document.getElementById('btn');
const btnSend = document.getElementById('submit-btn');
const agreeCheck = document.getElementById('agreement');

btn.addEventListener('click', function () {
  if (receiveEmail.value == "tryber@teste.com" && receivePassword.value == "123456")  {
    alert("Olá, Tryber!");        
  } else {
      alert("Email ou senha inválidos."); 
  }    
} );

agreeCheck.addEventListener('click', function () {
  console.log(agreeCheck.value)
  if (agreeCheck.value != 'on') {
    btnSend.removeAttribute('disabled')
  } else 
      btnSend.toggleAttribute('disabled')
});
