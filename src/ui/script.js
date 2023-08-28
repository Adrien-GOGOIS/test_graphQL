let todos = [];

async function handleClick() {
	const url = 'http://localhost:4000/graphql';
	const query = `
		query {
			getTodos {
			name
			content
			status
			}
	  	}
	`;

	const options = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({query})
	};
	const request = new Request(url, options);
	await fetch(request)
		.then(res => res.json())
		.then(res => todos = res.data.getTodos);
}

function displayName() {
	console.log(todos)
	document.getElementById("todoList").innerHTML = todos.map(todo => {
		return `<li>
			<p>Name : ${todo.name.toUpperCase()}</p>
			<p>Content : ${todo.content}</p>
			<p>Status : ${todo.status}</p>
		</li>`
		}
	)
}

document.getElementById("myBtn").addEventListener("click", async (event) => {
	event.preventDefault();
	await handleClick();
	displayName()
  });