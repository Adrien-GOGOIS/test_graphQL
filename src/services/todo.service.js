import todos from '../database/todos.json' assert { type: "json" };

class TodoService {
	findAll = () => {
		return todos;
	}
	findById = (id) => {
		const response = todos[id - 1]
		if (!response) {
			throw new Error('No todo found, you lucky bastard!')
		} else {
			return response
		}
	}
}

const todoServiceInstance = new TodoService()
export default todoServiceInstance;