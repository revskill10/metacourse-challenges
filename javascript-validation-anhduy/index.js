const express = require('express');
const app = express();
const PORT = 3001;
const { validateUser } = require('./validation');

app.use(express.json());

app.post('/api/users/register', async (req, res, next) => {	
	try {
		const result = await validateUser(req.body);
		if (result.error) {
			res.status(400).json({
				error: result.error.details
			})
		}
		res.status(200).json();
	} catch(err) {
		console.log(err);
		next(err);
	}
})

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});