const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.get('/all', async (req, res) => {
  try {
    const result = await User
      .find()
      .select('login password')
      .sort({login: -1});
    if(!result) res.status(404).json({ user: 'Not found' });
    else {
      console.log(result);
      res.json(result)
    };
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const {login, password} = req.body;
    const result = await User
      .findOne(
        {
          login: login,
          password: password,
        }
      )
      .select('login password')
    if(!result) res.status(404).json({ user: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;