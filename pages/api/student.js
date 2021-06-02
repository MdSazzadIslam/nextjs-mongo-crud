import connectDB from "../../db/connectDB";
import studentService from "../../services/studentService";
connectDB();
export default async (req, res) => {
  console.log("controller", req.body);
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

    case "DELETE":
      try {
        const result = await studentService.delete(req.params.id);
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

    case "PUT":
      try {
        const isExists = await studentService.getById(req.params.id);
        if (isExists) {
          isExists.name = req.body.name;
          const result = await studentService.update(req.params.id, isExists);

          if (result) {
            res.status(200).send({ success: true, msg: "Successfull" });
          } else {
            return res
              .status(204)
              .send({ success: false, message: "Something went wrong" });
          }
        } else {
          return res
            .status(400)
            .send({ success: false, msg: "Product not found" });
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
      res.status(400).send({ success: false, msg: "Something went wrong" });
      break;
  }
};
