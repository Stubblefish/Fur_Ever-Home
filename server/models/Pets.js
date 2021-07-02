const mongoose = require("mongoose");

const { Schema } = mongoose;

const petsSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  cost: {
    type: Number,
    required: true,
    min: 0.99,
  },
  breed: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const Pets = mongoose.model("Pets", petsSchema);

module.exports = Product;
