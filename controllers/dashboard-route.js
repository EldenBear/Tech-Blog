const router = require('express').Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    const postData = await Post.findAll({
        where: {
            userId: req.session.user_id,
        }
    }).catch((err) => { 
        res.json(err);
      });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('dashboard', { posts,  logged_in: req.session.logged_in, });
      });
  
  
  router.get('/edit/:id', async (req, res) => {
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

  router.get('/add', async (req, res) => {
    try{
        res.render('newPost', {logged_in: req.session.logged_in});
    } catch (err) {
        res.status(500).json(err);
    }
  });

module.exports = router;