const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello world');
})

app.get('/products', (req, res) => {
  res.json({
    name: 'Producto1',
    price: 1000,
  })
})

app.get('/categories', (req, res) => {
  res.json({
    id: 1,
    category: 'ropa',
  })
})

app.listen(port, () => {
  console.log('estoy corriendo en', port);
});
