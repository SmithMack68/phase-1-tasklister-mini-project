
const todoFormId = 'create-task-form';
//const newTaskDescription = document.getElementById('new-task-description')


document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById(todoFormId);
  todoForm.addEventListener('submit', addToDo);
  });

function addToDo(e){
  e.preventDefault();
  const todoText = e.target.description.value;
  const taskList = document.getElementById('tasks');
  const newTask = document.createElement('li');
  newTask.innerText = todoText;
  const deleteButton = document.createElement('button');
  deleteButton.addEventListener('click', handleDelete)
  deleteButton.textContent = 'x';
  //newTask.textContent = ` ${} `;
  newTask.append(deleteButton);
  taskList.append(newTask);
  e.target.reset();
  //document.querySelector("#description").appendChild('li');
}

function handleDelete(e){
   e.target.parentNode.remove();
 }
