document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let newTask = document.getElementById('new-task-description')
    addTaskToList(newTask)
    form.reset()

  })
});

function addTaskToList(todo){
  let li = document.createElement('li')
  li.setAttribute('id','ad-task')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteTask)
  btn.textContent = ' x '
  li.textContent = `${todo.value}  `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
  

  // let taskListItem = document.getElementById('tasks')
  // taskListItem.textContent = todo.value
}

function deleteTask(e){
  let btnRemove = document.getElementById('ad-task')
  btnRemove.remove()
}

