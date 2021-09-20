const todos=[];

function showTodoList(){
    const list = document.getElementById('todoList');
    list.innerHTML='';
    for(let i=0; i<todo.length;i++){
        list.innerHTML += '<li>${todos[i]<button onclick="deleteTodo(${i})">DEL</button></li>';
    }
}

function addTodo(){
    const newTodo = document.getElementById('todoInput').value;
    if(newTodo === '') return;
    todos.push(newTodo);
    showTodoList();
    document.getElementById('todoInput').value='';
}