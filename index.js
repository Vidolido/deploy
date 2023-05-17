const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Goce Levkovski');
});

app.listen(3000, (err) => {
	err ? console.log(err) : console.log('Server running on port 3000');
});
