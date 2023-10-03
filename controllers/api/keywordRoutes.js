const router = require('express').Router();
const { Keyword } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newKeyword = await Keyword.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newKeyword);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const keywordData = await Keyword.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!keywordData) {
      res.status(404).json({ message: 'No keyword found with this id!' });
      return;
    }

    res.status(200).json(keywordData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;