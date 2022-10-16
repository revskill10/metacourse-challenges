const UserRepositoryRedis = require('../database/redis/repository');
const { InternalServerError } = require('../utils/errors/custom-error');

module.exports = function UserService(redisClient) {
	const registerUser = async(data) => {
		const userRepositoryRedis = new UserRepositoryRedis(redisClient);
		let user = await userRepositoryRedis.createUser(data);				
		if (!user) {
			throw new InternalServerError('Register user failed');
		}
		user = JSON.parse(user);
		return user;
	};
	const getAllUsers = async() => {
		const userRepositoryRedis = new UserRepositoryRedis(redisClient);
		let users = await userRepositoryRedis.getAllUsers();						
		if (!users) {
			throw new InternalServerError('Register user failed');
		}
		let usersList = [];
		for (let user of users) {
			usersList.push(JSON.parse(user));
		}
		return usersList;
	};
	const getUserByEmail = async(email) => {
		const userRepositoryRedis = new UserRepositoryRedis(redisClient);
		let user = await userRepositoryRedis.getUserByEmail(email);		
		if (user) {
			user = JSON.parse(user);
		}
		return user;
	};
	return {
		registerUser,
		getAllUsers,
		getUserByEmail
	};
};

