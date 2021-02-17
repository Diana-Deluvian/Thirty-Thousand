const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
app.use(cors());
require('dotenv').config();
app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://" + process.env.DB_USERNAME + ":" + process.env.DB_PASSWORD + "@personal-data.telw9.mongodb.net/dictionary?retryWrites=truegodb://127.0.0.1:27017/details", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
    console.log("Connection with MongoDB was successful");
  });


let word = require("./model");

const router = express.Router();
app.use("/", router);

router.route("/").get(function(req, res) {
    word.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

router.route("/addword").post(function(req, res) {
    word.create(req.body );
    res.send("worked");
}
)

router.route("/getData").get(function(req, res) {
    word.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

  router.route("/delete").get(function(req, res) {
    word.deleteMany({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });


app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

