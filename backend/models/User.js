const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
        // password2: { type: String, required: true },
		// quote: { type: String },
	},
	{ collection: 'User' }
)

const model = mongoose.model('User', User)

module.exports = model

// const mongoose = require('mongoose')

// const User = new mongoose.Schema(
//     {
//         name : {type: String, required: true },
//         email :  {type: String, required: true },
//         password :  {type: String, required: true },
//         password2 :  {type: String, required: true }
//     },
//     // mongoose.Collection
//     {collection: 'User'}
// )

// const model = mongoose.model('User', User)

// // module.exports = User

// module.exports = model