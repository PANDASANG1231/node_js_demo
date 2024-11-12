const express = require('express');
const router = express.Router();
const path = require('path');
const dashboardData = require('../data/dashboard');
const { 
    readJsonAsync, 
    logAllFiles
} = require('../functions/file_handle');


const sankeyData = readJsonAsync(path.join(__dirname, '../data'), 'sankeyData.json')

router.get('/', (req, res) => {
    res.render('cards', { 
        sankey_data: sankeyData,
        data: dashboardData,
        path: '/cards'
    });
});

module.exports = router;