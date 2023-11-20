const { getUserByIdService } = require("../user/user.service");
const jwt = require("jsonwebtoken");
function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    res.status(200).json({ message: "info get it", ok: true });
    req.info = decoded;
  });
}

module.exports = {
  verifyToken,
};
