const app = require('./app');
const PORT = 3004;
const RegisterLoggingService = require('./services/register-logging.service');

const registerLoggingService = new RegisterLoggingService();

app.listen(PORT, () => {
	//run consumer of rabbitmq server
	registerLoggingService.consumer();
	console.log(`App listening on port ${PORT}`);
});