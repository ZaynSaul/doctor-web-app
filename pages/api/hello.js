// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbCon from "../../utils/mongodb";
dbCon();
export default async function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
