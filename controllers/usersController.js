const BaseController = require("./baseController");

class UsersController extends BaseController {
  constructor(model) {
    super(model);
  }

  /** if a method in this extended class AND the base class has the same name, the one in the extended class will run over the base method */
  // Create User.
  async createUser(req, res) {
    const { first_name, last_name, phone_num, email, password } = req.body;
    try {
      // Create new user
      const newUser = await this.model.create({
        first_name: first_name,
        last_name: last_name,
        phone_num: phone_num,
        email: email,
        password: password,
      });
      return res.json(newUser);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getAll(req, res) {
    try {
      const output = await this.model.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err + "test" });
    }
  }
  // Retrieve all users already covered in baseController
}

module.exports = UsersController;
