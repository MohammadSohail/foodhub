const User = require("../model/user");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user) {
      return res.status(400).json({
        message: "User already registered",
      });
    }

    const { name, email, password, address } = req.body;
    const _user = new User({
      name,
      email,
      password,
      address,
    });

    _user.save((error, data) => {
      if (data) {
        return res.status(201).json({
          message: "User created Successfully",
        });
      }
      if (error) {
        console.log(error);
        return res.status(404).json({
          message: "Something went wrong",
        });
      }
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        const { _id, name, email, address } = user;
        res.cookie("token", token, { expiresIn: "1h" });
        res.status(200).json({
          token,
          user: {
            _id,
            name,
            email,
            address,
          },
        });
      } else {
        return res.status(400).json({
          message: "Bad Password!",
        });
      }
    }
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "Signout Successfully!",
  });
};
