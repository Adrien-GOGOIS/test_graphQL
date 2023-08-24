import userServiceInstance from "../services/user.service.js";

const Todo = {
	user: (parent, args) => {
		return userServiceInstance.findById(parent.id)
	}
}

export default Todo;
