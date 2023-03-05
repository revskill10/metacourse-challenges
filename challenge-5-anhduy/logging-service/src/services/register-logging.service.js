const amqp = require("amqplib");
const fs = require('fs');
const path = require('path');

module.exports = function RegisterLoggingService() {
	const producer = async(user) => {
			const QUEUE = "register";			
			const amqpServer = "amqp://localhost:5672"
			const connection = await amqp.connect(amqpServer)
			const channel = await connection.createChannel();
			await channel.assertQueue(QUEUE);
			await channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(user)))
			console.log(`Job sent successfully`);
			await channel.close();
			await connection.close();		
	};
	const consumer = async() => {
		const QUEUE = "register";		
		const amqpServer = "amqp://localhost:5672"
		const connection = await amqp.connect(amqpServer)
		const channel = await connection.createChannel();
		await channel.assertQueue(QUEUE);
		
		channel.consume(QUEUE, message => {
				console.log(message.content.toString());
				const data = JSON.parse(message.content.toString());
				console.log(`Recieved logging of user ${data.email}`);
				//write data to file				
				const date = new Date();
				const curDate = date.getDate() + '-' + (date.getMonth() + 1)  + '-' + date.getFullYear();
				const writeData = `user_registered, ${curDate.toString()}, ${JSON.stringify(data)}\n`;
				const filePath = path.join(__dirname, '..', 'storage', 'events.txt');
				fs.appendFile(filePath, writeData, function(err) {
					if(err) {
							return console.log(err);
					}
					console.log("The file was saved!");
				}); 			
		})

		console.log("Waiting for messages...")
	};
	
	return {
		producer,
		consumer
	};
};

