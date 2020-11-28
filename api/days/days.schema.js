const mongoose = require("mongoose");
const {Schema, ObjectId} = mongoose;

const daySchema = new Schema(
  {
    productId: {type: ObjectId, require: true},
    weight: { type: Number, require: true},
    date: { type: Date, require: true},
    userId: { type: ObjectId, require: true }
  }
);

const daysModel = mongoose.model("Day", daySchema);
module.exports = daysModel;
