const express = require('express');
const searchEngineCtrl = require('../controllers/searchEngineController');

const router = express.Router();

const catcher = fn => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(err.code).json(err);
  }
};

router.get('/search/:keyword', catcher(async (req, res) => {
  const { keyword } = req.params;
  const results = await searchEngineCtrl.search(keyword);
  res.json(results);
}));

module.exports = router;
