const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a username"],
      unique: true,
      trim: true,
      maxLength: [20, "Name cannot exceed 20 characters"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email address"],
      unique: true,
      trim: true,
      maxLength: 255,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      unique: true,
      trim: true,
      maxLength: 255,
    },
    uType: {
      type: String,
      required: true,
      default: "user",
    },
    status: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
