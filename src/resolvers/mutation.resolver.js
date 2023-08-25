import todoServiceInstance from "../services/todo.service.js";

const Mutation = {
	createTodo: (parent, { input }, context) => {
		return todoServiceInstance.createOne(input, context);
	} 
}

export default Mutation;