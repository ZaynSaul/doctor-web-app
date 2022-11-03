import Patient from "../../../models/Patient";
import db from "../../../utils/mongodb";

db.dbCon();
export default async function handler(req, res) {
  const { method } = req;

  if (method === "POST") {
    try {
      const { name, age, gender, address, dob, symptoms } = req.body;
      const newPatient = new Patient({
        name,
        age,
        gender,
        address,
        dob,
        symptoms,
        diagnosed: "",
        isRecovered: 0,
      });
      const patient = await newPatient.save();
      await db.disconnect();
      res.status(201).send({
        message: "Created patient!",
        _id: patient._id,
        name: patient.name,
        age: patient.age,
        gender: patient.gender,
        address: patient.address,
        dob: patient.dob,
        symptoms: patient.symptoms,
        diagnosed: patient.diagnosed,
        isRecovered: patient.isRecovered,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "GET") {
    try {
      const patients = await Patient.find().sort();
      res.status(200).json(patients);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
