import todoServiceInstance from "../services/todo.service.js";

const User = {
	todos: (parent, _args, { todosDatabase }) => {
		return todoServiceInstance.findByUserId(parent.id, todosDatabase)
	}
}

export default User;