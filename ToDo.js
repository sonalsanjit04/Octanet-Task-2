document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    const category = document.getElementById('category').value;

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');

    const taskContent = document.createElement('span');
    // Corrected: Wrapping the text in backticks for template literals
    taskContent.textContent = `${taskText} - ${dueDate} - ${priority} - ${category}`;
    taskItem.appendChild(taskContent);

    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function() {
        taskItem.style.textDecoration = 'line-through';
    });
    taskActions.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
    taskActions.appendChild(deleteButton);

    taskItem.appendChild(taskActions);
    taskList.appendChild(taskItem);

    // Reset input fields after adding a task
    document.getElementById('new-task').value = '';
    document.getElementById('due-date').value = '';
    document.getElementById('priority').value = 'low';
    document.getElementById('category').value = 'work';
});
