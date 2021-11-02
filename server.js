const express = require('express')
const app = express()

const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const path = require('path');

const todoRoutes = require('./routes/todo');

const connectDB = require('./config/db');
dotenv.config({ path:'./env'})

connectDB();

const port = process.env.PORT || 3000;

app.use(express.json());

if(process.env.MODE === 'development') {
    app.use(morgan('dev'));
}


app.use('/api/task',todoRoutes);

app.get('/', (req, res) => res.send('API is running good'))
app.listen(port, () => console.log(`Server is running on port ${port} !`))