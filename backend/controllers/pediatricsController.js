const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();
const router = express.Router();
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY);
const { getAllTopics, getTopicById, addTopic, deleteTopic } = require('../controllers/pediatricsController');

// Fetch all topics
router.get('/topics', getAllTopics);

// Fetch topic by ID
router.get('/topics/:id', getTopicById);

// Add a new topic
router.post('/topics', addTopic);

// Delete topic by ID
router.delete('/topics/:id', deleteTopic);

module.exports = router;
