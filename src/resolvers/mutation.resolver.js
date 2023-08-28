import todoServiceInstance from "../services/todo.service.js";

const Mutation = {
	createTodo: (parent, { input }, context) => {
		const createdTodo = todoServiceInstance.createOne(input, context);
		context.pubsub.publish('todo', createdTodo )
		return createdTodo
	},
	updateTodo: (parent, { input }, context) => {
		return todoServiceInstance.updateOne(input, context);
	},
	deleteTodo: (parent, { id }, context) => {
		return todoServiceInstance.deleteOne(id, context.todosDatabase);
	},
	broadcastRandomNumber: (_, { number }, { pubsub }) => {
		pubsub.publish('randomNumber', number)
		return number
	}
}

export default Mutation;