const { default: mongoose } = require("mongoose");

const LabSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
    trim: true,
    maxLength: [50, "name must not exceed 50 characters"],
  },
  paId: {
    type: String,
    required: true,
    trim: true,
  },
  testResult: {
    type: [String],
    required: true,
    maxLength: 255,
    default: "",
  },
  nurseName: {
    type: String,
    required: true,
    maxLength: 20,
  },
  description: {
    type: String,
    required: true,
    maxLength: 200,
  },
  status: {
    type: Number,
    required: true,
    default: 0,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.models.Lab || mongoose.model("Lab", LabSchema);
