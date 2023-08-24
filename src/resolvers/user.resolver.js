import todoServiceInstance from "../services/todo.service.js";

const User = {
	todos: (parent) => {
		return todoServiceInstance.findByUserId(parent.id)
	}
}

export default User;