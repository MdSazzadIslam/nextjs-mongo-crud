const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  country: {
    type: String,
    required: [true, "Please select country"],
    index: true,
  },
  email: {
    type: String,
    required: [true, "Email required"],
    unique: true,
    index: true,
  },

  dob: {
    type: Date,
    required: [true, "Date of birth required"],
    unique: true,
    index: true,
  },
});

module.exports =
  mongoose.models.Student || mongoose.model("Student", studentSchema);
