const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            "mongodb+srv://madlireiljan:HecateLapsed9@appmongoose.sx8bk.mongodb.net/?retryWrites=true&w=majority&appName=AppMongoose",
            
        );
    } catch (err) {
        console.error("Error connecting to mongodb");
        console.error(err);
    }
}

module.exports = { connect };