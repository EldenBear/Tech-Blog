const router = require("express").Router();
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const dayjs = require("dayjs");
 /*Gets all posts*/ 
router.get("/", async (req, res) => {
  const postData = await Post.findAll().catch((err) => {
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
  res.render("homepage", {
    posts,
    logged_in: req.session.logged_in,
  });
});
 /*Gets post by id*/ 
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (!postData) {
      res.status(404).json({ message: "No post with this id!" });
      return;
    }
    const commentData = await Comment.findAll({
      where: { postId: req.params.id },
    });
    const commentsUnformatted = commentData.map((comment) => comment.get({ plain: true }));
    const comments = commentsUnformatted.map((comment) => {
      const day = dayjs(comment.date);
      return {
        ...comment,
        date: day.format('MM/DD/YYYY')
      }
    });
    const postUnformatted = postData.get({ plain: true });
    const day = dayjs(postUnformatted.date);
    const post =  {
      ...postUnformatted,
      date: day.format('MM/DD/YYYY')
    }
    res.render("post", { post, logged_in: req.session.logged_in, comments });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
