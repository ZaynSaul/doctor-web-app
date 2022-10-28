import User from "../../models/User";
import dbCon from "../../utils/mongodb";
dbCon();

export default async function handler(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email, password: password });
    if (user) {
      res.redirect("/admin");
    } else {
      return res.jason({ status: "User does not exist" });
    }
  } catch (err) {
    res.status(400).json({ status: "Something went wrong" });
  }
}
