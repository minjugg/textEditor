const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentSchema = new Schema({
  context: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Document", documentSchema);
