const express = require('express');
const app = express();
const port = 8080; // Le port sur lequel votre application écoutera
 
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
 
app.get('/cc', (req, res) => {
    res.send('f"tegdz!oopxjhyftdzyish');
  });
   

app.listen(port, () => {
  console.log(`L'application Express écoute sur le port ${port}`);
});
