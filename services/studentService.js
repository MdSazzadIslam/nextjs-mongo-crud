import Student from "../models/studentModel";

class studentService {
  async get() {
    return await Student.find({});
  }
  async getById(id) {
    return await Student.findById(id);
  }

  async create(data) {
    return await Student(data).save();
  }

  async update(id, data) {
    return await Student.findOneAndUpdate({ _id: id }, { $set: data });
  }

  async delete(id) {
    return await Student.findByIdAndDelete({ _id: id });
  }
}
export default new studentService();
