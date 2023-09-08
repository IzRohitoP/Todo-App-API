//Importing all required libaries
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//this is middlewares , that help to send request as json from the body
app.use(express.json());

//Setting the route

const todoroutes = require("./routes/todo");
app.use("/api/v1", todoroutes);

//Making connection to mongodb  database
const dbconnect = require("./config/dbconnect");
dbconnect();

//creating server

app.listen(PORT, () => {
  console.log(`Server started http://localhost:${PORT}`);
});

//Making default route
app.get("/", (req, resp) => {
  resp.send(`<h1> This is homepage </h1>`);
});
