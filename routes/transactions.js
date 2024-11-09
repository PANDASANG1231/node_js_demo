const express = require('express');
const router = express.Router();
const dashboardData = require('../data/dashboard');

router.get('/', (req, res) => {
    res.render('transactions', { 
        data: dashboardData,
        path: '/transactions'
    });
});

module.exports = router;