import User from "../../../models/User";
import db from "../../../utils/mongodb";

export default async function handler(req, res) {
  const { method } = req;
  await db.dbCon();

  if (method === "GET") {
    try {
      const users = await User.find({ uType: "nurse" });
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
