const mongoose = require("mongoose");

const { Schema } = mongoose;

const petSchema = new Schema({
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
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  breed: {
    type: Schema.Types.ObjectId,
    ref: "Breed",
    required: true,
  }
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
