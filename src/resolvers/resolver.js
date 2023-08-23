import todos from '../database/todos.json' assert { type: "json" };

const Query = {
	hello: (_, { name }) => `Hello ${name || "World"}!`,
	getTodos: () => todos
}

export default Query;