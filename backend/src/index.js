const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./utils/dbconnection');
const userRoutes = require('./routes/userRoute');

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
