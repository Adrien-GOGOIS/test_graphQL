class TodoService {
	findAll = (database) => {
		return database;
	}
	findById = (id, database) => {
		const todo = database.find((element) => element.id === id)
		if (!todo) {
			throw new Error('No todo found, you lucky bastard!')
		} else {
			return todo
		}
	}
	findByUserId = (userId, database) => {
		return database.filter(todo => todo.user_id === userId);
	}
}

const todoServiceInstance = new TodoService()
export default todoServiceInstance;