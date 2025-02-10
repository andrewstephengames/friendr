const express = require ('express');
const cors = require ('cors');
const mongoose = require('mongoose');
const secrets = require('./secrets')
const usersRouter = require ('./routers/users.router');
const postsRouter = require ('./routers/posts.router');

const app = express();
app.use (express.json());
app.use (cors());

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, this is the landing page for the backend of the website.');
});

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log(`[INFO]: Server is running on port ${port}`);
  mongoose.connect(`${secrets}`).then(() => {
    console.log ('[INFO]: Connected to MongoDB');
  }).catch ((err) => {
    console.log (`[ERROR]: Unable to connect to the database: ${err}`)
  })
})