const mongoose = require("mongoose");

const connect = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);

  if (connection) {
    console.log(`MongoDB Connected:`.cyan.underline.bold);
  } else {
    log.error("Database connection failed");
    exit(1);
  }
};

module.exports = connect;
