const router = require("express").Router();
const Comment = require("../../models/Comment");

router.post("/", async (req, res) => {
  try {
    const commentData = await Comment.create({
      contents: req.body.contents,
      userName: req.body.userName,
      userId: require.body.userId,
      date: require.body.date,
      postId: require.body.postId,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const comment = await Comment.update(
      {
        contents: req.body.contents,
        date: require.body.date,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

