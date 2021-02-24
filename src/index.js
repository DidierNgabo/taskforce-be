import express from 'express';
import bodyParser from 'body-parser';
// eslint-disable-next-line import/no-extraneous-dependencies
import volleyball from 'volleyball';
import todoRoutes from './routes/todo.route';

const app = express();
const port = process.env.PORT || 4000;

app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/todo', todoRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

export default app;
