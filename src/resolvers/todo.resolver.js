import userServiceInstance from "../services/user.service.js";

const Todo = {
	user: (parent, args, { usersDatabase }) => {
		return userServiceInstance.findById(parent.id, usersDatabase)
	}
}

export default Todo;
