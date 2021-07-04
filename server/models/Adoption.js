const mongoose = require("mongoose");

const { Schema } = mongoose;

const adoptSchema = new Schema({
  AdoptDate: {
    type: Date,
    default: Date.now,
  },
  pets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pets",
    },
  ],
});

const Adoption = mongoose.model("Adoption", adoptSchema);

module.exports = Adoption;
