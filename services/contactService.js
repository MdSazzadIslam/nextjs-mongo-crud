import Contact from "../../portfolio/models/contactModel";

class contactService {
  static async create(data) {
    return await Contact(data).save();
  }
}
export default contactService;
