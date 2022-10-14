const util = require('util');


module.exports = function UserRepositoryRedis(redisClient) {
	const createUser = async(data) => {
		const { email } = data;
		//store data in redis
		redisClient.set(`user_${email}`, JSON.stringify(data));
		//get data and return it
		redisClient.get = util.promisify(redisClient.get);
		const user = await redisClient.get(`user_${email}`);
		return user;
	};
	return {
		createUser
	};
};
