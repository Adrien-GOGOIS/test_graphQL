import todoServiceInstance from "../services/todo.service.js";

const Mutation = {
	createTodo: (parent, { input }, context) => {
		return todoServiceInstance.createOne(input, context);
	},
	updateTodo: (parent, { input }, context) => {
		return todoServiceInstance.updateOne(input, context);
	},
	deleteTodo: (parent, { id }, context) => {
		return todoServiceInstance.deleteOne(id, context.todosDatabase);
	}
}

export default Mutation;