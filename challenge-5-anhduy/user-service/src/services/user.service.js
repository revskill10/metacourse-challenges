const UserRepositoryRedis = require('../database/redis/repository');
const { InternalServerError } = require('../utils/errors/custom-error');

module.exports = function UserService(redisClient) {
	const registerUser = async(data) => {
		const userRepositoryRedis = new UserRepositoryRedis(redisClient);
		let user = await userRepositoryRedis.createUser(data);		
		user = JSON.parse(user);
		if (!user) {
			throw new InternalServerError('Register user failed');
		}
		return user;
	};
	return {
		registerUser
	};
};

