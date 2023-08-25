import * as fs from "fs";
import userServiceInstance from "./user.service.js";

class TodoService {
	JSON_FILE_PATH = 'src/database/todos.json';

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
		await this.addTodoInDatabase(newTodo, context.todosDatabase);
		return newTodo;
	}

	async addTodoInDatabase(todo, database) {
		try {
			database.push(todo);
			fs.writeFileSync(this.JSON_FILE_PATH, JSON.stringify(database), 'utf8');
		} catch(error) {
			throw new Error('Something wrong happened writing file : ', error)
		}
	}
}

const todoServiceInstance = new TodoService()
export default todoServiceInstance;