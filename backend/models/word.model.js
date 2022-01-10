const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  user: { type: Object, required: true },
  word: { type: String, required: true },
  translation: { type: String, required: true }, 
  sentence: { type: String, required: true },
  type: { type: String },
  tagA: { type: String },
  tagB: { type: String },
  language: { type: String, required: true },
  level: { type: String, required: true },
  like: { type: Boolean },
});

module.exports = mongoose.model('Word', wordSchema);
