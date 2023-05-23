const router = require("express").Router();
const Comment = require("../../models/Comment");
const User = require("../../models/User");
 /*Post for comment*/ 
router.post("/", async (req, res) => {
  try {
    const date = new Date();
    const dateString = date.toISOString().split("T")[0];
    const user = await User.findOne({ where: { id: req.session.user_id } });
    const commentData = await Comment.create({
      contents: req.body.comment,
      userName: user.userName,
      userId: req.session.user_id,
      date: dateString,
      postId: req.body.postId,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
