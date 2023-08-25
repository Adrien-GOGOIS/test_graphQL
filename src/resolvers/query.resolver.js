import todoServiceInstance from '../services/todo.service.js'
import userServiceInstance from '../services/user.service.js';

const Query = {
	getTodos: (parent, args, { todosDatabase }) => todoServiceInstance.findAll(todosDatabase),
	getTodo: (parent, { id }, { todosDatabase }) => todoServiceInstance.findById(id, todosDatabase),
	getUsers: (parent, args, { usersDatabase }) => userServiceInstance.findAll(usersDatabase),
	getUser: (parent, { id }, { usersDatabase }) => userServiceInstance.findById(id, usersDatabase)
}

export default Query;