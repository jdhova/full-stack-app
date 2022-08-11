const mongoose = require('mongoose')
const config = require('config')
// const db = config.get('mongoURI')
const db =   'mongodb://fullstack:fullstack123@cluster0.mtgubpp.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect(db, 
            {   useNewUrlParser: true,
                // useCreateIndex: true
            }

            )

        console.log('Mongo connected')
    } catch(err) {
        console.log(err.message,'Mongo wrong')
        process.exit(1)
    }
}

module.exports = connectDB