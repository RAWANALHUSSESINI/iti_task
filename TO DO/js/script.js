
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list  = document.getElementById('todo-list');

const STORAGE_KEY = 'todos';
let todos = loadTodos();

render();


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  todos.push({
    id: Date.now(),
    text,
    completed: false,
  });
  saveTodos();
  render();
  form.reset();
  input.focus();
});


list.addEventListener('click', (e) => {
  const li = e.target.closest('li[data-id]');
  if (!li) return;
  const id = Number(li.dataset.id);

  // delete
  if (e.target.matches('.delete')) {
    todos = todos.filter(t => t.id !== id);
    saveTodos();
    render();
  }


  if (e.target.matches('.edit')) {
    const current = todos.find(t => t.id === id);
    const newText = prompt('Edit task:', current.text);
    if (newText !== null) {
      current.text = newText.trim() || current.text; 
      saveTodos();
      render();
    }
  }
});



list.addEventListener('change', (e) => {
  if (!e.target.matches('.toggle')) return;
  const li = e.target.closest('li[data-id]');
  const id = Number(li.dataset.id);
  const t = todos.find(t => t.id === id);
  t.completed = e.target.checked;
  saveTodos();

  li.classList.toggle('done', t.completed);
});


function render() {
  list.innerHTML = '';
  if (!todos.length) {
    list.innerHTML = `<li class="empty">No tasks yet…</li>`;
    return;
  }

  const frag = document.createDocumentFragment();
  todos.forEach(t => {
    const li = document.createElement('li');
    li.dataset.id = t.id;
    li.className = t.completed ? 'todo-item done' : 'todo-item';
    li.innerHTML = `
      <label class="todo-main">
        <input type="checkbox" class="toggle" ${t.completed ? 'checked' : ''}>
        <span class="text">${escapeHTML(t.text)}</span>
      </label>
      <div class="actions">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
    `;
    frag.appendChild(li);
  });
  list.appendChild(frag);
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function loadTodos() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}


