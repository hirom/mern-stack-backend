const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://hirom:1234abc@cluster0.mt4a75j.mongodb.net/appDatabase?retryWrites=true&w=majority");
        console.log("Success: Connected to MongoDB");
    } catch (err) {
        console.log("Failure: Unconnected to MongoDB");
        throw new Error();
    }
}

module.exports = connectDB;
