import Patient from "../../../models/Patient";
import db from "../../../utils/mongodb";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  await db.dbCon();

  if (method === "GET") {
    try {
      const patient = await Patient.findById(id);
      res.status(200).json(patient);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    try {
      const patients = await Patient.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(patients);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    try {
      await Patient.findByIdAndDelete(id);
      res.status(200).json("Data deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
