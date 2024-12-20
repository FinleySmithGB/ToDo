const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    const taskTextNode = document.createTextNode(taskText);
    const deleteButton = document.createElement('button');
    
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', () => taskList.removeChild(taskItem));
    
    taskItem.addEventListener('click', () => taskItem.classList.toggle('completed'));
    taskItem.appendChild(taskTextNode);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    taskInput.value = '';
});
