import User from "../../../models/User";
import db from "../../../utils/mongodb";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  await db.dbCon();

  if (method === "GET") {
    try {
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    try {
      const users = await User.findByIdAndUpdate(id, req.body);
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    try {
      await User.findByIdAndDelete(id);
      res.status(200).json("User deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
