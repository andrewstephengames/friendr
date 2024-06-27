const express = require ('express');
const mongoose = require('mongoose');
const secrets = require('./secrets')
const usersRouter = require ('./routers/users.router');
const postsRouter = require ('./routers/posts.router');

const app = express();
app.use (express.json());

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log(`[INFO]: Server is running on port ${port}`);
  mongoose.connect(`mongodb+srv://andrew:${secrets}@cluster0.4xlt9av.mongodb.net/friendr?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
    console.log ('[INFO]: Connected to MongoDB');
  }).catch ((err) => {
    console.log (`[ERROR]: Unable to connect to the database: ${err}`)
  })
})