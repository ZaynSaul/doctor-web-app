import Lab from "../../../models/Lab";
import db from "../../../utils/mongodb";

db.dbCon();
export default async function handler(req, res) {
  const { method } = req;

  if (method === "POST") {
    try {
      const { patientName, paId } = req.body;
      const newLab = new Lab({
        patientName,
        paId,
        testResult: "",
        nurseName: "",
        description: "",
        status: 0,
        createdAt: Date.now(),
        updatedAt: null,
      });
      const lab = await newLab.save();
      await db.disconnect();
      res.status(201).send({
        message: "Created lab!",
        _id: lab._id,
        patientName: lab.patientName,
        paId: lab.paId,
        testResult: lab.testResult,
        nurseName: lab.nurseName,
        description: lab.description,
        status: lab.status,
        createdAt: lab.createdAt,
        updatedAt: null,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "GET") {
    try {
      const labData = await Lab.find().sort({ patientName: 1 });
      res.status(200).json(labData);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
