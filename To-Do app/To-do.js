let todoList = [];
displayItems();

function addTodo (){
  let inputElement = document.querySelector('#todo-input');
  let todoItem = inputElement.value;
  todoList.push(todoItem);
  inputElement.value = '';

  displayItems();
}

function displayItems(){

  let containerElement = document.querySelector('.todo-contanier');

  let newHtml = '';
  
  for (i = 0; i < todoList.length; i++){

    newHtml += `
    <div>

    <span>${todoList[i]}</span>
    <button onclick = " todoList.splice(${i},1); displayItems();">Delete</button>

    </div>

    `;

  }
  containerElement.innerHTML = newHtml;
}