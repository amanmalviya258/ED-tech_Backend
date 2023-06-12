const mongoose = require("mongoose");
require("dotenv");

const connect = () => {
  mongoose.connect(process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => {
        console.log("Connected to mongoDB");
      })
      .catch((err) => {
        console.log("Not connected to mongoDB");
        console.log(err);
        process.exit(1)
        //this is an forceful temination of this process block in case of failure 
        // but it is more preferable to use error handling than this method 
      });
};

exports.module = connect();
