const redis = require('redis');
const { InternalServerError } = require('../../utils/errors/custom-error');

const redisConnect = async() => {
	const client = redis.createClient();

	client.on('error', function(error) {
		console.log('Connect to redis failed!');
		throw new InternalServerError('Connect to redis failed!');
	});

	client.on('connect', function() {
		console.log('Connected to redis!');
	});
	
	await client.connect();

	return client;
}

module.exports = redisConnect;
