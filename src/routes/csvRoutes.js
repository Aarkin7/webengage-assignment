const express = require('express');
const router = express.Router();
const fetchData = require('../services/fetchData');
const processData = require('../services/processData');
const generateCSV = require('../services/generateCSV');

router.get('/', async (req, res) => {
    try {
        const { users, posts, comments } = await fetchData();
        const processedData = processData(users, posts, comments);
        const filePath = await generateCSV(processedData);
        res.json({ message: 'CSV generated successfully', filePath });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to generate CSV', details: error.message });
    }
});

module.exports = router;
