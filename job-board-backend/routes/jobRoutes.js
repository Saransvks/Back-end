const express = require('express');
const { getJobs, applyJob } = require('../controllers/jobController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', getJobs);
router.post('/apply', authMiddleware, applyJob);

module.exports = router;
