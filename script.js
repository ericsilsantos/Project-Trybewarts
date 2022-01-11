const receiveEmail = document.getElementById('email');
const receivePassword = document.getElementById('password');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  if (receiveEmail.value == "tryber@teste.com" && receivePassword.value == "123456")  {
    alert("Olá, Tryber!");        
  } else {
      alert("Email ou senha inválidos."); 
  }    
} );
