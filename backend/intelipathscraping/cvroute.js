const express = require('express');
const { uploadcv } = require('./CvController');
const router = express.Router();
const multer = require('multer');
const upload = multer();

router.post('/', upload.single("file"), uploadcv);


module.exports = router;
