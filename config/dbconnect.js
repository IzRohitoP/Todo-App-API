const mongoose = require("mongoose");
require("dotenv").config();

const dbconnect = async () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Db ka connection bhi ho gya"))
    .catch((error) => {
      console.error("Kuch issue hai:", error);
      process.exit(1);
    });
};

module.exports = dbconnect;
