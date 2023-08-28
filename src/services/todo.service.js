import userServiceInstance from "./user.service.js";
import DatabaseService from "./database.service.js";

class TodoService {
	TODO_DB_PATH = 'src/database/todos.json'
	databaseService = new DatabaseService(this.TODO_DB_PATH);

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
		await this.databaseService.updateDatabase(context.todosDatabase)
		return newTodo;
	}

	updateOne = (body, database) => {
		const { id, name, content, status, userId } = body;
		const updatedTodo = {
			id: parseInt(id),
			name,
			content,
			status,
			user_id: userId
		}
		const todoIndex = database.findIndex(todo => todo.id === parseInt(id));
		database[todoIndex] = updatedTodo;
		this.databaseService.updateDatabase(database);
		return database[todoIndex];
	}

	deleteOne = (id, database) => {
		const updatedTodos = database.filter(todo => todo.id !== id);
		this.databaseService.updateDatabase(updatedTodos);
		return updatedTodos;
	}
}

const todoServiceInstance = new TodoService()
export default todoServiceInstance;