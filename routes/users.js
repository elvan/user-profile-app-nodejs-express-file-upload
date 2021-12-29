const express = require('express');
const multer = require('multer');

const router = express.Router();
const upload = multer();

router.get('/', function (req, res) {
  res.render('profiles');
});

router.get('/new-user', function (req, res) {
  res.render('new-user');
});

router.post('/profiles', upload.single('image'), function (req, res) {
  const uploadedImageFile = req.file;
  const userData = req.body;
});

module.exports = router;
