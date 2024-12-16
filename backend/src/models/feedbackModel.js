const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  category: { type: String, required: true },
  rating: { type: Number, required: true },
  comments: { type: String, required: true },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
