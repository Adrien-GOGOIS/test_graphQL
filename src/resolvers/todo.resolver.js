import userServiceInstance from "../services/user.service.js";

const Todo = {
	user: (parent, args, { usersDatabase }) => {
		return userServiceInstance.findById(parent.user_id, usersDatabase)
	}
}

export default Todo;
