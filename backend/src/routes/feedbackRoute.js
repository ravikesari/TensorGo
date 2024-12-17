const express = require('express');
const router = express.Router();
const { saveFeedback,getFeedback,deleteFeedback } = require('../controllers/feedbackController');

router.post('/', saveFeedback);
router.get('/data', getFeedback);
router.delete('/:id', deleteFeedback)

module.exports = router;
