const mongoose = require('mongoose');
const articles = new mongoose.Schema({
  date: String,
  articles: String,
});

module.exports = mongoose.model('Articles', articles);
