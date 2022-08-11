const express = require('express')


const app = express()


const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/User')


// Middlewares

app.use(cors())

//  connection to db


mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(() => console.log('DB Connected'));

    mongoose.connection.on('error', (err) => {
  console.log(`DB connection error: ${err.message}`);
});



app.use(express.json())

// Routes
app.post('/api/register', async(req,res) => {
    try {
		// const newPassword = await bcrypt.hash(req.body.password, 10)
		const user = await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
            password2: newPassword2,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
    console.log(req.body)
    res.json({status: 'back end recieved'})
})

const port = process.env.PORT ||5000
// const port = 5000


app.listen(port,() => {
    console.log(`running on ${port}`)
})

