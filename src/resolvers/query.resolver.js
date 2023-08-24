import todoServiceInstance from '../services/todo.service.js'
import userServiceInstance from '../services/user.service.js';

const Query = {
	getTodos: () => todoServiceInstance.findAll(),
	getTodo: ( _, { id } ) => todoServiceInstance.findById(id),
	getUsers: () => userServiceInstance.findAll(),
	getUser: ( _, { id } ) => userServiceInstance.findById(id)
}

export default Query;