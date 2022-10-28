import Appointment from "../../../models/Appointment";
import db from "../../../utils/mongodb";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  await db.dbCon();

  if (method === "GET") {
    try {
      const appointment = await Appointment.findById(id);
      res.status(200).json(appointment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    try {
      const appointment = await Appointment.findByIdAndUpdate(id, req.body);
      res.status(200).json(appointment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    try {
      await Appointment.findByIdAndDelete(id);
      res.status(200).json("Data deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
