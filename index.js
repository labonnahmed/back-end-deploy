const express = require('express');
const app = express();


app.get('/', (req, res) => {
    const fruits = { item1: "mango", item2: "banana", item3: "orange", item4: "licchi" }
    res.send(fruits);
});


app.listen(4000, () => console.log('listenting to port 4000'));