let list = [];

const input = document.querySelector(".userInput");
const addBtn = document.querySelector(".addBtn");
const todoList = document.querySelector(".todoList");
const dueDateInput = document.querySelector(".dueDateInput");

addBtn.addEventListener("click", addToArray);

function addToArray() {
  const task = input.value;
  const date = dueDateInput.value;
  list.push({ task, date });
  input.value = "";
  dueDateInput.value = "";
  createList();
}

function createList() {
  todoList.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    todoList.innerHTML += `
    <div class="todoItem">
      <div class='fitem'>${list[i].task} </div>
      <div class='fitem'>${list[i].date ? list[i].date : "Due: None  "} </div>
      <div class='fitem'>
      <button class='delBtn' onclick="list.splice(${i},1); createList()" >Delete</button> 
      </div>
    </div>`;
  }
}
