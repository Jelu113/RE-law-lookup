const router = require('express').Router();
const { Keyword, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all keywords from the Keyword table
    const keywordData = await Keyword.findAll();
    console.log(keywordData);

    // Serialize data so the template can read it
    const keywords = keywordData.map((keyword) => keyword.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      keywords, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/keywords', async (req, res) => {
  try {
    // Get all keywords from the Keyword table
    const keywordData = await Keyword.findAll();
    console.log(keywordData);

    // Serialize data so the template can read it
    const keywords = keywordData.map((keyword) => keyword.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('keywords', { 
      keywords, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/keywords/:id', async (req, res) => {
  try {
    const keywordData = await Keyword.findByPk(req.params.id);

    const keyword = keywordData.get({ plain: true });

    res.render('keyword', {
      ...keyword,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

router.get('/register', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('register');
});

router.get('/laws', async (req, res) => {
  try {
    // Get all keywords from the Keyword table
    const keywordData = await Keyword.findAll();
    console.log(keywordData);

    // Serialize data so the template can read it
    const keywords = keywordData.map((keyword) => keyword.get({ plain: true }));
  
    res.render('laws', { 
      keywords, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;