import connectDB from "../../db/connectDB";
import studentService from "../../services/studentService";
connectDB();
export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "DELETE":
      try {
        const isExists = await studentService.getById(id);

        if (isExists) {
          const result = await studentService.delete(id);

          if (result) {
            res.status(201).send({ success: true, msg: "Successfull" });
          } else {
            return res
              .status(400)
              .send({ success: false, msg: "Something went wrong" });
          }
        } else {
          return res
            .status(404)
            .send({ success: false, msg: "No record found" });
        }
      } catch (error) {
        return res.status(500).send({ success: false, msg: error.message });
      }

      break;

    case "PUT":
      try {
        const isExists = await studentService.getById(id);
        if (isExists) {
          isExists.name = req.body.name;
          isExists.country = req.body.country;
          isExists.email = req.body.email;
          isExists.dob = req.body.dob;

          const result = await studentService.update(id, req.body);

          if (result) {
            res.status(200).send({ success: true, msg: "Successfull" });
          } else {
            return res
              .status(204)
              .send({ success: false, message: "Something went wrong" });
          }
        } else {
          return res
            .status(404)
            .send({ success: false, msg: "Record not found" });
        }
      } catch (error) {
        return res.status(500).send({ success: false, msg: error.message });
      }

      break;

    case "GET":
      try {
        const result = await studentService.getById(id);
        if (result) {
          res
            .status(201)
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
      res.setHeaders("Allow", ["GET", "PUT", "DELETE"]);
      return res
        .status(405)
        .json({ success: false })
        .end(`Method ${method} Not Allowed`);
      break;
  }
};
