const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
// const helmet = require('helmet');
require('dotenv').config();

const userRoutes = require('./routes/user.routes');
const wordsRoutes = require('./routes/words.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
// app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api/users', userRoutes);
app.use('/api/words', wordsRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ data: 'Not found...' });
});
app.use('/api/user', (req, res) => {
  res.status(404).send({ user: 'Not found...' });
});
app.use('/api/words', (req, res) => {
  res.status(404).send({ words: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* MONGOOSE */
const dbUrl = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER || '';
const dbPassword = process.env.DB_PASS || ''; 

// mongoose.connect('mongodb://localhost:27017/bulletinBoard');

// mongoose.connect(`mongodb://${dbUser}:${dbPassword}@${dbUrl}/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connect('mongodb://mo1513_olx:Mo1513_olx@mongo26.mydevil.net/mo1513_olx', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect('mongodb://mo1513_diction:Mo1513_diction@mongo26.mydevil.net/mo1513_diction', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once('open', () => {
  console.log(`Successfully connected to the database !!!  ${dbName}`);
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
