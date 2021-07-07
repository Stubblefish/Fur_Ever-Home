const mongoose = require("mongoose");

const { Schema } = mongoose;

const breedSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const Breed = mongoose.model("Breed", breedSchema);

module.exports = Breed;
