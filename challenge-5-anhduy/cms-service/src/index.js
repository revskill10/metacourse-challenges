const app = require('./app');
const PORT = 3003;

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});