import express from 'express';
import dotenv from "dotenv"
dotenv.config()
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/data', (req, res) => {
  res.json({
    message: 'This is a sample API response',
    data: [1, 2, 3, 4, 5]
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
