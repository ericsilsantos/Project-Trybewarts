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
  } else { 
    btnSend.toggleAttribute('disabled'); 
  }
});
/* REQUISITO 20 */
keyBoardCheck.addEventListener('input', () => {
  const maxChar = 500;
  const charCounter = keyBoardCheck.value.length;
  const charDecrement = maxChar - charCounter;
  counter.innerHTML = charDecrement;
});
// REQUISITO 21
function selectedMaterials(){
  let materials=""
  const selected=document.querySelectorAll('.subject:checked')
  for(let index=0;index<selected.length; index++){
    materials+=`${selected[index].value}, `
  }
  return materials
}
function createArray(){
  let array=[]
  array[0]="Nome: "+document.getElementById("input-name").value+" "+document.getElementById("input-lastname").value
  array[1]="Email: "+document.getElementById("input-email").value
  array[2]="Casa: "+document.getElementById("house").value
  array[3]="Família: "+document.querySelector('input[name="family"]:checked').value
  array[4]="Matérias: "+selectedMaterials()
  array[5]="Avaliação: "+document.querySelector('input[name="rate"]:checked').value
  array[6]="Observações: "+document.getElementById("textarea").value
  return array
}
btnSend.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(document.querySelectorAll('.subject:checked'))
  let arrayForm=createArray()
  for(let index=0; index<arrayForm.length; index++){
    let form=document.getElementById("evaluation-form")
    let p=document.createElement("p")
    p.innerText=arrayForm[index]
    form.appendChild(p)
  }
})