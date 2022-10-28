import User from "../../../models/User";
import db from "../../../utils/mongodb";
import bcryptjs from "bcryptjs";
db.dbCon();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const { name, email, password } = req.body;
  if (
    !name ||
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 5
  ) {
    res.status(422).json({
      message: "Validation error",
    });
    return;
  }
  await db.dbCon();
  const userExist = await User.findOne({ email: email });
  if (userExist) {
    res.status(422).json({ message: "Email exist try another" });
    await db.disconnect();
    return;
  }
  const newUser = new User({
    name,
    email,
    password: bcryptjs.hashSync(password),
    isAdmin: false,
  });

  const user = await newUser.save();
  await db.disconnect();
  res.status(201).send({
    message: "Created user!",
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
}
