const input = document.getElementById('input');
const todos = document.getElementById('todos');
const form = document.getElementById('form');

const todosUl = JSON.parse(localStorage.getItem('todos'));

if (todosUl) {
	todosUl.forEach((todo) => {
		addTodo(todo);
	});
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	addTodo();
});

function addTodo(todo) {
	let todoText = input.value;

	if (todo) {
		todoText = todo.text;
	}
	if (todoText) {
		const li = document.createElement('li');

		if (todo && todo.completed) {
			li.classList.add('completed');
		}

		li.addEventListener('contextmenu', (e) => {
			e.preventDefault();
			li.remove();
			updateLS();
		});
		li.addEventListener('click', () => {
			li.classList.toggle('completed');
			updateLS();
		});

		li.innerHTML = todoText;

		todos.appendChild(li);

		input.value = '';

		updateLS();
	}
}
function updateLS() {
	const todosEl = document.querySelectorAll('li');

	const todosArr = [];

	todosEl.forEach((todoEl) => {
		todosArr.push({
			text: todoEl.innerText,
			completed: todoEl.classList.contains('completed'),
		});
	});
	localStorage.setItem('todos', JSON.stringify(todosArr));
}
