const { default: mongoose } = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: [50, "name must not exceed 50 characters"],
  },
  address: {
    type: String,
    required: true,
    trim: true,
    maxLength: [50, " address must be at most 50 characters"],
  },
  email: {
    type: String,
    required: true,
    maxLength: 255,
  },
  phone: {
    type: String,
    required: true,
    maxLength: 20,
  },
  status: {
    type: Number,
    required: true,
    default: 0,
  },
  date: {
    type: Date,
    required: true,
    default: null,
  },
});

module.exports =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);
