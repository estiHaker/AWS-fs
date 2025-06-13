const express = require('express');
const cors = require('cors');
const app = express();
const port = 3333;

app.use(cors());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from backend!' });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
