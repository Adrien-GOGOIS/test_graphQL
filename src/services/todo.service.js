import todos from '../database/todos.json' assert { type: "json" };

class TodoService {
	findAll = () => {
		return todos;
	}
	findById = (id) => {
		const todo = todos.find((element) => element.id === id)
		if (!todo) {
			throw new Error('No todo found, you lucky bastard!')
		} else {
			return todo
		}
	}
}

const todoServiceInstance = new TodoService()
export default todoServiceInstance;