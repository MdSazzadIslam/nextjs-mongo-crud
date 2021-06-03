import connectDB from "../../db/connectDB";
import studentService from "../../services/studentService";
connectDB();
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        const result = await studentService.create(req.body);
        if (result) {
          res.status(201).send({ success: true, msg: "Successfull" });
        } else {
          return res
            .status(400)
            .send({ success: false, msg: "Something went wrong" });
        }
      } catch (error) {
        return res.status(500).send({ success: false, msg: error.message });
      }

      break;

    case "GET":
      try {
        const result = await studentService.get();
        if (result) {
          res
            .status(200)
            .send({ success: true, msg: "Successfull", data: result });
        } else {
          return res
            .status(400)
            .send({ success: false, msg: "Something went wrong" });
        }
      } catch (error) {
        return res.status(500).send({ success: false, msg: error.message });
      }

      break;

    default:
      res.setHeaders("Allow", ["GET", "POST"]);
      return res
        .status(405)
        .json({ success: false })
        .end(`Method ${method} Not Allowed`);
  }
};
