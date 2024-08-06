document.addEventListener('DOMContentLoaded', function() {
      const todoForm = document.getElementById('todo-form');
      const todoInput = document.getElementById('todo-input');
      const todoList = document.getElementById('todo-list');
  
      // Load todos from localStorage
      let todos = JSON.parse(localStorage.getItem('todos')) || [];
  
      // Display todos
      function displayTodos() {
          todoList.innerHTML = '';
          todos.forEach((todo, index) => {
              const li = document.createElement('li');
              li.textContent = todo;
              
              const deleteBtn = document.createElement('button');
              deleteBtn.textContent = 'Delete';
              deleteBtn.classList.add('delete-btn');
              deleteBtn.addEventListener('click', () => {
                  todos.splice(index, 1);
                  localStorage.setItem('todos', JSON.stringify(todos));
                  displayTodos();
              });
              
              li.appendChild(deleteBtn);
              todoList.appendChild(li);
          });
      }
  
      displayTodos();
  
      // Add todo
      todoForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const todoText = todoInput.value.trim();
          if (todoText !== '') {
              todos.push(todoText);
              localStorage.setItem('todos', JSON.stringify(todos));
              todoInput.value = '';
              displayTodos();
          }
      });
  });
  