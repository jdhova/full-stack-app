// const express = require('express')


// const app = express()


// const cors = require('cors')
// const bcrypt = require('bcrypt')
// const mongoose = require('mongoose');
// require('dotenv').config();

// const User = require('./models/User')


// // Middlewares

// app.use(cors())

// //  connection to db


// mongoose
//     .connect(process.env.DATABASE, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true 
//     })
//     .then(() => console.log('DB Connected'));

//     mongoose.connection.on('error', (err) => {
//   console.log(`DB connection error: ${err.message}`);
// });



// app.use(express.json())

// // app.get('/api/register', (req, res) => {
// // 	res.send('hello world')
// //   })

// // Routes
// app.post('/api/register', async(req,res) => {
// 	res.send('hello 3')
//     try {

// 		res.send('hello 4')
//         console.log('step 1 res is' ,res,'req is',req)
// 		// const newPassword = await bcrypt.hash(req.body.password, 10)
// 		const user = await User.create({
            
// 			name: req.body.value,
// 			email: req.body.value,
			
// 			// password: newPassword,
            
            
// 		})
// 		console.log('step 2 signup done')
//         res.send('home signup done')
// 		res.status(200).json({ status: 'ok' }) 
// 	} catch (err) {
// 		res.status(200).json({ status: 'error', error: 'Duplicate email' })
// 	}
//     console.log(req.body)
//     res.json({status: 'back end recieved'})
// })

// app.post('/api/login', async (req, res) => {
// 	const user = await User.findOne({
// 		email: req.body.email,
// 	})

// 	if (!user) {
// 		return { status: 'error', error: 'Invalid login' }
// 	}

// 	const isPasswordValid = await bcrypt.compare(
// 		req.body.password,
// 		user.password
// 	)

// 	if (isPasswordValid) {
// 		const token = jwt.sign(
// 			{
// 				name: user.name,
// 				email: user.email,
// 			},
// 			'secret123'
// 		)

// 		return res.json({ status: 'ok', user: token })
// 	} else {
// 		return res.json({ status: 'error', user: false })
// 	}
// })



// const port = process.env.PORT ||5000
// // const port = 5000


// app.listen(port,() => {
//     console.log(`running on ${port}`)
// })



const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user')
// const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

require('dotenv').config();
app.use(cors())
app.use(express.json())


// mongoose.connect('mongodb://localhost:27017/full-mern-stack-video')

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


app.listen(5000, () => {
	console.log('Server started on 5000')
})

