const mongoose = require("mongoose");

const connection = {};

async function connectDB() {
  debugger;
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("Connection successfull");
  } catch (error) {
    console.log("Database disconnection error", error);
    process.exit(1);
  }
}

export default connectDB;
