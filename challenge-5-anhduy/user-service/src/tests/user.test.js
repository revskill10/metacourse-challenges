const request = require('supertest')
const app = require('../app')

test('Should create new user and return', async () => {
	const user = await request(app)
			.post('/api/register')
			.send({
				first_name: "Truong", 
        last_name: "Dung", 
        email: "dung@test.com", 
        password: "Dungssss",
        password_confirmation: "Dungssss"
			})			
			.expect(201)
	expect(user).not.toBeNull();
})