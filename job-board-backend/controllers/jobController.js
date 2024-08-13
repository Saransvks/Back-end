const Job = require('../models/Job');

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching jobs' });
  }
};

exports.applyJob = async (req, res) => {
  const { jobId, userId } = req.body;
  try {
    const job = await Job.findById(jobId);
    job.applications.push({ user: userId });
    await job.save();
    res.json({ message: 'Job application submitted' });
  } catch (error) {
    res.status(500).json({ error: 'Error applying for job' });
  }
};
