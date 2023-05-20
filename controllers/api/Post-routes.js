const router = require('express').Router();
const Post = require('../../models/Post');

router.post('/', async (req, res) => {
  try { 
    const postData = await Post.create({
    title: req.body.title,
    contents: req.body.contents,
    userName: req.body.userName,
    userId: require.body.userId,
    date: require.body.date,
  });
  res.status(200).json(postData)
} catch (err) {
  res.status(400).json(err);
}
});

router.put('/:id', async (req, res) => {
    try {
      const post = await Post.update(
      {
        title: req.body.title,
        contents: req.body.contents,
        date: require.body.date,
      },
      {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
      };
  });

module.exports = router;