const express = require('express');
const path = require('path');
const fs = require('fs');

function logAllFiles(dirPath) {
  fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err}`);
      return;
    }

    files.forEach((file) => {
      const fullPath = path.join(dirPath, file.name);
      console.log(fullPath);
    });
  });
}


const app = express();

// Set EJS as templating engine
logAllFiles(path.join(__dirname, 'views'))
app.set('views', path.join(__dirname, 'views')); 
console.log(path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use(express.static('public'));

const indexRouter = require('./routes/index');
const overviewRouter = require('./routes/overview');
const transactionsRouter = require('./routes/transactions');

// // Middleware to track current path
// app.use((req, res, next) => {
//   res.locals.path = req.path;
//   next();
// });

// Use routes
app.use('/', indexRouter);
app.use('/overview', overviewRouter);
app.use('/transactions', transactionsRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
