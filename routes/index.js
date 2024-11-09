const express = require('express');
const router = express.Router();
const dashboardData = require('../data/dashboard');

router.get('/', (req, res) => {
    res.render('index', { 
        data: dashboardData,
        path: '/'
    });
});

module.exports = router;
