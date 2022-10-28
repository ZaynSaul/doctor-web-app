import Appointment from "../../../models/Appointment";
import db from "../../../utils/mongodb";

db.dbCon();
export default async function handler(req, res) {
  const { method } = req;
  if (method === "GET") {
    try {
      const appointment = await Appointment.find({});
      res.status(200).json(appointment);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
