module.exports = (req, res, next) => {
  if (req.method == "POST" && req.path == "/login") {
    if (req.body.username === "admin" && req.body.password === "admin") {
      res.status(200).json({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      });
    } else {
      res.status(400).json({ message: "Username or password are not correct" });
    }
  } else {
    next();
  }
};
