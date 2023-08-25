import todoServiceInstance from "../services/todo.service.js";

const Mutation = {
	createTodo: (parent, args, context) => {
		return todoServiceInstance.createOne(args, context);
	} 
}

export default Mutation;