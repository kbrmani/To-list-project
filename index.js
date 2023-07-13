const inputBox = document.querySelector('.input-box');

// let inputValue = inputBox.value;

const display = document.querySelector('.list-container');

document.querySelector('.add-button').addEventListener('click', ()=>{
  if(inputBox.value === ''){
    alert('You must are something');
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
   display.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7'
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
})

display.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
      e.target.classList.toggle('checked');
      saveData();
    }
    else if(e.target.tagName === 'SPAN'){
      e.target.parentElement.remove();
      saveData();
    };
})

function saveData(){
  localStorage.setItem('Data', display.innerHTML);
}

function showList(){
  display.innerHTML = localStorage.getItem('Data');
}
showList();



































































