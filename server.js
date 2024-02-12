
const express = require('express');
const app = express();
const PORT = 3000;

// Tarjoile staattisia tiedostoja (HTML, CSS, JS)
app.use(express.static('public'));

// Henkilökunnan tiedot JSON-muodossa
const staffData = [
    { id: 1, name: 'Alice Johnson', title: 'CEO', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', title: 'CTO', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Davis', title: 'Lead Developer', email: 'charlie@example.com' }
];

// Reitti henkilökunnan tietojen hakuun
app.get('/api/staff', (req, res) => {
    res.json(staffData);
});

// Käynnistetään palvelin
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

