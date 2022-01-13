const receiveEmail = document.getElementById('email');
const receivePassword = document.getElementById('password');
const btn = document.getElementById('btn');
const btnSend = document.getElementById('submit-btn');
const agreeCheck = document.getElementById('agreement');
const keyBoardCheck = document.getElementById('textarea');
const counter = document.getElementById('counter');

btn.addEventListener('click', () => {
  if (receiveEmail.value === 'tryber@teste.com' && receivePassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
/* REQUISITO 18 */
agreeCheck.addEventListener('click', () => {
  console.log(agreeCheck.value);
  if (agreeCheck.value !== 'on') {
    btnSend.removeAttribute('disabled');
  } else { btnSend.toggleAttribute('disabled'); }
});
/* REQUISITO 20 */
keyBoardCheck.addEventListener('input', () => {
  const maxChar = 500;
  const charCounter = keyBoardCheck.value.length;
  const charDecrement = maxChar - charCounter;
  counter.innerHTML = charDecrement;
});
