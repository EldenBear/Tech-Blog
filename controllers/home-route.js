const router = require('express').Router();
const Post = require('../models/Post');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    const postData = await Post.findAll().catch((err) => { 
        res.json(err);
      });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('all', { posts });
      });
  
  
  router.get('/post/:id', withAuth, async (req, res) => {
    try{ 
        const postData = await Post.findByPk(req.params.id);
        if(!postData) {
            res.status(404).json({message: 'No post with this id!'});
            return;
        }
        const post = postData.get({ plain: true });
        res.render('post', post);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;