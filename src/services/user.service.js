class UserService {
	findAll = (database) => {
		return database;
	}

	findById = (id, database) => {
		console.log({id});
		const user = database.find((element) => element.id === id)
		if (!user) {
			throw new Error('No user found! Maybe this show is over');
		} else {
			return user
		}
	}
}

const userServiceInstance = new UserService()
export default userServiceInstance;