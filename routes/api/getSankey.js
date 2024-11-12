const { 
    readJsonAsync, 
    logAllFiles
} = require('../../functions/file_handle');

const path = require('path');
const express = require('express');

const router = express.Router();
const { readFileSync } = require('fs');

// Routes
router.get('/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const filePath = path.join(__dirname, '../../data', name + '.json');
        console.log(filePath);
        const data = JSON.parse(readFileSync(filePath, 'utf8'));
        res.json(data);

    } catch (error) {
        res.status(400).json({
            message: 'Invalid data type or structure'
        });
    }
});

module.exports = router;


// const express = require('express');
// const router = express.Router();

// router.get('/hello', (req, res) => {
//   res.json({
//     message: "Hello World!",
//     timestamp: new Date()
//   });
// });

// module.exports = router;
