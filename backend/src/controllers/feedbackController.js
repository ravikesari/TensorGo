const Feedback = require('../models/feedbackModel');

const saveFeedback = async (req, res) => {
  try {
    const {category, rating, comments } = req.body;
    
    const newFeedback = new Feedback({ category, rating, comments });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save feedback' });
  }
};


const getFeedback = async (req, res) => {
  try {
    const feedbackData = await Feedback.find();
    res.status(200).json(feedbackData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch feedback' });
  }
};

const deleteFeedback = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedFeedback = await Feedback.findByIdAndDelete(id);
    if (!deletedFeedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.status(200).json({ message: 'Feedback deleted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete feedback' });
  }
};

module.exports = {
  saveFeedback, getFeedback, deleteFeedback
};
