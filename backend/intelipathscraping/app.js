const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const Cv = require('./cv');
const eurekaConfig = require('./eureka-config');


require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const eurekaClient = eurekaConfig.client;

const cvroute = require('./cvroute');

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

// MIDDLEWARE

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// Route for handling file uploads
app.use("/api/", cvroute);

// Serve static files (PDFs) from '/pdf'
app.use('/pdf', express.static(path.join(__dirname, 'pdf')));

app.get('/api/cvs', async (req, res) => {
  try {
    const cvs = await Cv.find({}, '-content'); 

    res.status(200).json(cvs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


// Route for downloading files
app.get('/api/cv/:filename', (req, res) => {
  const cvPath = path.resolve(__dirname, '../pdf', decodeURIComponent(req.params.filename));
  res.setHeader('Content-Disposition', `attachment; filename="${req.params.filename}"`);
  res.sendFile(cvPath);
});

const port = process.env.PORT || 7000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.listen(port, () => {
  connect();
  console.log("running");
});
