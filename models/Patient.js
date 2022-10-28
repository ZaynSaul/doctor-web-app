const { default: mongoose } = require("mongoose");

const PatientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: [50, "name must not exceed 50 characters"],
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
      maxLength: [50, " address must be at most 50 characters"],
    },
    dob: {
      type: Date,
      required: true,
    },
    symptoms: {
      type: [String],
      required: true,
      trim: true,
    },
    diagnosed: {
      type: String,
      trim: true,
      maxLength: 255,
      default: "",
    },
    isRecovered: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Patient || mongoose.model("Patient", PatientSchema);
