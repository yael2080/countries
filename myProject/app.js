const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/api")
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, authorization, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    next();
  });
app.use(bodyParser.json())
app.use('/',router)

const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}


mongoose.connect(process.env.DB_CONNECT,connectionParams)
.then(() => {
    console.log("connected to db");
})
.catch((err) => {
    console.log(`error connecting ${err}`);
})



app.listen(5000, () => console.log("app listen port 5000"));

