//  NOT imported and tested

module.exports.createMongoDBConnection = async () => {
    const mongodb = process.env.MONGO_URL || 'mongodb://localhost/test?authSource=admin'
    const options = {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }
    try {
        return await mongoose.connect(mongodb, options)
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}
