const express = require("express");

const logger = require("./middleware/logger");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());


// Apply logging middleware globally

app.use(logger);


app.get("/", (req, res) => {

    res.send("Home Page");

});


app.use("/users", userRoutes);


app.listen(3000, () => {

    console.log("Server Running On Port 3000");

});