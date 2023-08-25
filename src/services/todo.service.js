import userServiceInstance from "./user.service.js";
import DatabaseService from "./database.service.js";

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

	createOne = async (body, context) => {
		const {name, content, userId} = body;
		userServiceInstance.findById(userId, context.usersDatabase);
		const id = Math.floor(Math.random() * (1000 - 5 + 1) + 5);
		const newTodo = {
			id,
			name,
			content,
			status: "WAITING",
			user_id: userId
		};
		context.todosDatabase.push(newTodo);
		const databaseService = new DatabaseService('src/database/todos.json')
		await databaseService.updateDatabase(context.todosDatabase)
		return newTodo;
	}
}

const todoServiceInstance = new TodoService()
export default todoServiceInstance;