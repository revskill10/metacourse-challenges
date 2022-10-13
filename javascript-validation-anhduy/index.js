const express = require('express');
const PORT = 3001;
const { joiSchema } = require('./schema');
const { validate, ValidationError } = require('express-validation')

const app = express();

app.use(express.json());


app.post('/api/users/register', validate({ body: joiSchema }, {}, {}),
	async (req, res, next) => {
		try {
			res.status(200).json({ data: {} });
		} catch (err) {
			console.log(err);
			next(err);
		}
	});

//error handle middleware
app.use(function (err, req, res, next) {
	if (err instanceof ValidationError) {
		return res.status(err.statusCode).json({ err });
	}
	return res.status(500).json({ err });
});

//app running
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});