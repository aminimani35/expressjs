const express = require('express');


const app = express()

app.get('/',(req ,res) =>{
	const info = [
	{name: 'Amin',
	fullName: 'Imani',
	age: '24',
	phoneNumber: '09389232486'}
	]



let json = JSON.stringify(info);
res.send(info)
});


app.listen(3001)