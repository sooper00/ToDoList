const addButton = document.querySelector('.add-button');
const input = document.querySelector('.add-section').querySelector('input');
const list = document.querySelector('.list-wrapper');

function deletion(event) {
  const targetTag = event.target.parentNode;

  targetTag.parentNode.removeChild(targetTag);
}

function creation() {
  const inputData = input.value;
  let child = document.createElement('div');
  let removeC = document.createElement('div');
  let textC = document.createElement('div');
  
  child.classList.add('list-item');
  removeC.classList.add('remove');
  textC.classList.add('todo-text');
  
  removeC.innerHTML = '❌';
  removeC.addEventListener('click', deletion);
  textC.innerHTML = inputData;

  child.appendChild(removeC);  
  child.appendChild(textC);
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