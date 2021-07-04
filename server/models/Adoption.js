const mongoose = require("mongoose");

const { Schema } = mongoose;

const adoptSchema = new Schema({
  AdoptDate: {
    type: Date,
    default: Date.new,
  },
});

const Adoption = mongoose.model("Adoption", adoptSchema);

module.exports = Adoption;
