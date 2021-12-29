const express = require('express');
const multer = require('multer');

const db = require('../data/database');

const storageConfig = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'images');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + '-' + file.originalname);
  },
});

const router = express.Router();
const upload = multer({
  storage: storageConfig,
});

router.get('/', function (req, res) {
  res.render('profiles');
});

router.get('/new-user', function (req, res) {
  res.render('new-user');
});

router.post('/profiles', upload.single('image'), async function (req, res) {
  const uploadedImageFile = req.file;
  const userData = req.body;

  await db.getDb().collection('users').insertOne({
    name: userData.username,
    // @ts-ignore
    imagePath: uploadedImageFile.path,
  });

  res.redirect('/');
});

module.exports = router;
