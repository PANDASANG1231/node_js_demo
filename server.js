const express = require('express');
const path = require('path');
const { logAllFiles } = require('./functions/file_handle');

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
const cardsRouter = require('./routes/cards');

// Use routes
app.use('/', indexRouter);
app.use('/overview', overviewRouter);
app.use('/transactions', transactionsRouter);
app.use('/cards', cardsRouter);

const apiRouter = require('./routes/api/getSankey');
app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
