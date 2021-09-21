const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ApiError = require("../error/ApiError");
const { User } = require("../models/models");

const generateJwt = (id, email, role) => jwt.sign(
  { id, email, role },
  process.env.SECRET_KEY,
  { expiresIn: "24h" }
);

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("incorrect email or password13"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest("incorrect email or password2"));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }
  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.forbidden("incorrect email or password"));
    }
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.badRequest("incorrect email or password"));
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }
  async getAll(req,res){
    const users = await User.findAll()
    return res.json(users)
  }
  async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findOne({ where: { id } });

      await user.destroy();

      return res.json({ message: "User deleted" });
    } catch (e) {
      return res.status(500).json({ message: `${e} something is wrong1` });
    }
  }
}

module.exports = new UserController();
