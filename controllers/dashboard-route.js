const router = require("express").Router();
const dayjs = require("dayjs");
const Post = require("../models/Post");
 /*Gets all posts from signed in user*/ 
router.get("/", async (req, res) => {
  const postData = await Post.findAll({
    where: {
      userId: req.session.user_id,
    },
  }).catch((err) => {
    res.json(err);
  });
  const postsUnformated = postData.map((post) => post.get({ plain: true }));
  const posts = postsUnformated.map((post) => {
    const day = dayjs(post.date);
    return {
      ...post,
      date: day.format('MM/DD/YYYY')
    }
  });
  res.render("dashboard", { posts, logged_in: req.session.logged_in });
});
 /*Allows user to edit post bu the id*/ 
router.get("/edit/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (!postData) {
      res.status(404).json({ message: "No post with this id!" });
      return;
    }
    const postUnformatted = postData.get({ plain: true });
    if (postUnformatted.userId !== req.session.user_id) {
      res.redirect('/');
    }
    const day = dayjs(postUnformatted.date);
    const post =  {
      ...postUnformatted,
      date: day.format('MM/DD/YYYY')
    }
    res.render("edit", { post, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});
 /*Allows user to add new post*/ 
router.get("/add", async (req, res) => {
  try {
    res.render("newPost", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
