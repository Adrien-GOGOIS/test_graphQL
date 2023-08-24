import users from '../database/users.json' assert { type: "json" };

class UserService {
	findAll = () => {
		return users;
	}
	findById = (id) => {
		const user = users.find((element) => element.id === id)
		if (!user) {
			throw new Error('No user found! Maybe this show is over')
		} else {
			return user
		}
	}
}

const userServiceInstance = new UserService()
export default userServiceInstance;