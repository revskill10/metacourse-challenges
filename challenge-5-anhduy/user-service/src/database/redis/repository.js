

module.exports = function UserRepositoryRedis(redisClient) {
	const createUser = async(data) => {
		const { email } = data;				
		//store data in redis in 30 min		
		await redisClient.hSet('users', `user_${email}`, JSON.stringify(data), {
			EX: 30
		});	
		//get data and return it				
		const user = await redisClient.hGet('users', `user_${email}`);		
		return user;
		
	};

	const getAllUsers = async() => {		
		//get data and return it		
		const users = await redisClient.hVals('users');	
		return users;
	};
	const getUserByEmail = async(email) => {		
		const user = await redisClient.hGet('users', `user_${email}`);
		return user;
	};
	return {
		createUser,
		getAllUsers,
		getUserByEmail
	};
};
