import todos from '../database/todos.json' assert { type: "json" };

const Query = {
	hello: (_, { name }) => `Hello ${name || "World"}!`,
	getTodos: () => todos,
	getTodo: ( _, { id } ) => {
		return todos[id - 1]
	}
}

export default Query;