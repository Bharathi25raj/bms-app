const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  isActive: {
    type: Boolean,
    required: true,
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const theatres = mongoose.model("theatres", theatreSchema);

module.exports = theatres;
