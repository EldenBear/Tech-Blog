const router = require("express").Router();
const Post = require("../../models/Post");
const User = require("../../models/User");
 /*Posts postData and user name/date*/ 
router.post("/", async (req, res) => {
  try {
    const date = new Date();
    const dateString = date.toISOString().split("T")[0];
    const user = await User.findOne({ where: { id: req.session.user_id } });
    const postData = await Post.create({
      title: req.body.postTitle,
      contents: req.body.postContent,
      userName: user.userName,
      userId: req.session.user_id,
      date: dateString,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const date = new Date();
    const dateString = date.toISOString().split("T")[0];
    const post = await Post.update(
      {
        title: req.body.titleEdit,
        contents: req.body.commentEdit,
        date: dateString,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
 /*Post deletion*/ 
router.delete("/:id", async (req, res) => {
  try {
    await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
