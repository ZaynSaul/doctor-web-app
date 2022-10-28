import Appointment from "../../../models/Appointment";
import db from "../../../utils/mongodb";

db.dbCon();
export default async function handler(req, res) {
  const { method } = req;

  if (method === "POST") {
    try {
      const { name, address, email, phone } = req.body;

      const newAppointment = new Appointment({
        name,
        address,
        email,
        phone,
        status: 0,
        date: null,
      });

      const appointment = await newAppointment.save();
      await db.disconnect();
      res.status(201).send({
        message: "Created appointment!",
        name: appointment.name,
        address: appointment.address,
        email: appointment.email,
        phone: appointment.phone,
        status: appointment.status,
        date: appointment.date,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "GET") {
    try {
      const appointment = await Appointment.find();
      res.status(200).json(appointment);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
