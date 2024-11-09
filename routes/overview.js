const express = require('express');
const router = express.Router();
const dashboardData = require('../data/dashboard');

router.get('/', (req, res) => {
    res.render('overview', { 
        data: dashboardData,
        path: '/overview'
    });
});

module.exports = router;