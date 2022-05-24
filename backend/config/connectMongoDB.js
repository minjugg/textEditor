const mongoose = require("mongoose");

const connectMongoDB = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

mongoose.connection.once("open", () => console.log("Mongo DB connected, Server connected"));
mongoose.connection.on("error", (error) => console.error(error));

module.exports = { connectMongoDB };
