const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let word = new Schema({
  word: {
    type: String
  },
  definition: {
    type: String
  },
  example: {
    type: String
  },
  additionalContext: {
    type: String
  }
});

module.exports = mongoose.model("word", word);
