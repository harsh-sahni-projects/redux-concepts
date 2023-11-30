const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
	// res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

let cart = {
	items: [],
	amount: 0,
	totalItems: 0
}

app.get('/', (req, res) => {
	res.send('Server working.');
});

app.post('/updateCart', (req, res) => {
	cart = {...req.body};
	console.log(cart);
	setTimeout(() => {
		res.send('done');
	}, 500)
});

app.get('/getCart', (req, res) => {
	setTimeout(() => {
		res.send(cart);
	}, 500)
});

app.post('*', (req, res) => {
	res.status(404).send('Not found');
})
app.get('*', (req, res) => {
	res.status(404).send('Not found');
})

app.listen(3000, () => {
	console.log('Server running on 3000');
})