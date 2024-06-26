const express = require ('express');

const usersRouter = require ('./routers/users.router');

const app = express();
app.use (express.json());

const PORT = 80;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});