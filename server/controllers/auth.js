const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { name, password } = req.body;
  if (password == process.env.PASSWORD) {
    const token = jwt.sign({ name }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.json({ token, name });
  } else {
    return res.status(400).json({
      error: "Incorrect password", 
    });
  }
};
