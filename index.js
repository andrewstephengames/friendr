const express = require ('express');
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
})