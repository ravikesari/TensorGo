const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./utils/dbconnection');
const userRoutes = require('./routes/userRoute');
const feedbackRoutes = require('./routes/feedbackRoute');

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/feedback', feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
