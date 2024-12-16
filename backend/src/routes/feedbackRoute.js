const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedbackModel');

// Route to handle feedback submission
router.post('/', async (req, res) => {
  try {
    const { category, rating, comments } = req.body;
    const newFeedback = new Feedback({ category, rating, comments });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save feedback' });
  }
});

module.exports = router;
