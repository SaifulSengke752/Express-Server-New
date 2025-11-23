// Import express
const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk membaca JSON
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
    res.send("Hello World");
});

// GET API
app.get('/dummy-get', (req, res) => {
    res.json({
        message: 'This is a dummy GET API'
    });
});

// POST API
app.post('/dummy-post', (req, res) => {
    const body = req.body;
    console.log("Received body:", body);

    res.json({
        message: `This is a dummy POST API, you sent: ${JSON.stringify(body)}`
    });
});

// DELETE API
app.delete('/dummy-delete/:id', (req, res) => {
    const { id } = req.params;

    res.json({
        message: `Item with id ${id} has been deleted (dummy).`
    });
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
