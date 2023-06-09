const router = require("express").Router();
const User = require("../../models/User");
 /*User creation*/ 
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      userName: req.body.userName,
      password: req.body.password,
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});
 /*User login*/ 
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { userName: req.body.userName },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect Username or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect Username or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
 /*Gets info for user creating new account*/ 
router.post("/createNewAccount", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { userName: req.body.userName },
    });

    if (userData) {
      res.status(400).json({ message: "Invalid user name" });
      return;
    }

    const newUser = await User.create({
      userName: req.body.userName,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;

      res.json({ user: newUser, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
 /*destroys users session on logout*/ 
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
