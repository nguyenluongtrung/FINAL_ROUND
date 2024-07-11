const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');

const http = require('http');

const connectDB = require('./config/dbConnect');
const port = process.env.PORT || 5000;

connectDB();
const __dir = path.resolve();
const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

app.use('/finalround/api/accounts', require('./routes/accountRoutes'));
app.use('/finalround/api/discussions', require('./routes/discussionRoutes'));
app.use('/finalround/api/blogs', require('./routes/blogRoutes'));
app.use(express.static(path.join(__dir, '/client/dist')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dir, 'client', 'dist', 'index.html'));
});

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = { app };
