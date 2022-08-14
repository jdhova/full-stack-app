


const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user')
const WorkModel = require('./models/Work')
 const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

require('dotenv').config();
app.use(cors())
app.use(express.json())




mongoose.connect('mongodb://127.0.0.1:27017/travel')

// mongoose
//     .connect(process.env.DATABASE, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true 
//     })
//     .then(() => console.log('DB Connected'));

//     mongoose.connection.on('error', (err) => {
//   console.log(`DB connection error: ${err.message}`);
// });


app.post('/api/register', async (req, res) => {
	 console.log('here',req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

app.post('/api/work', async(req,res) => {

	const name = req.body.name
	const occupation = req.body.occupation
	const hoursworked = req.body.hoursworked

	const work = new WorkModel(
		{   name: name,
			occupation:occupation,
			hoursworked: hoursworked})

	try {

		await work.save()
		res.send('data saved')
	} catch(err){
		console.log(err)
	}
})


app.listen(5000, () => {
	console.log('Server started on 5000')
})

