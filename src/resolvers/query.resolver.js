import todoServiceInstance from '../services/todo.service.js'

const Query = {
	getTodos: () => todoServiceInstance.findAll(),
	getTodo: ( _, { id } ) => todoServiceInstance.findById(id)
}

export default Query;