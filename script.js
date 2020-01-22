const addButton = document.querySelector('.add-button');
const input = document.querySelector('.add-section').querySelector('input');
const list = document.querySelector('.list-wrapper');
const item = document.querySelector('.list-item');

function deletion(event) {
  const targetTag = event.target.parentNode;

  targetTag.parentNode.removeChild(targetTag);
}

function checkHandler(event){
  const targetTag = event.currentTarget;
  const textC = targetTag.querySelector('.todo-text');
  const checkC = targetTag.querySelector('.check-mark');

  if(textC.classList[1] === 'checked') {
    textC.classList.remove('checked');
    checkC.innerHTML = '';
  }
  else {
    textC.classList.add('checked');
    checkC.innerHTML = '✓';
  }
}

function creation() {
  const inputData = input.value;
  let child = document.createElement('div');
  let removeC = document.createElement('div');
  let textC = document.createElement('div');
  let checkC = document.createElement('div');
  
  child.classList.add('list-item');
  removeC.classList.add('remove');
  textC.classList.add('todo-text');
  checkC.classList.add('check-mark');
  
  removeC.innerHTML = '❌';
  textC.innerHTML = inputData;
  
  removeC.addEventListener('click', deletion);
  child.addEventListener('click', checkHandler);

  child.appendChild(removeC); 
  child.appendChild(textC);
  child.appendChild(checkC);
  list.appendChild(child);  

  input.value = '';
}

function enterHandler(event){
  if(event.keyCode == 13) {
    creation();
  }
}

function init(){
  addButton.addEventListener('click', creation);
  input.addEventListener('keydown', enterHandler);
}

init();