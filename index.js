const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello world');
})

app.get('/products', (req, res) => {
  res.json(
    [
      {
        name: 'Producto1',
        price: 1000,
      },
      {
        name: 'Producto3',
        price: 1000,
      },
      {
        name: 'Producto2',
        price: 1000,
      },
    ])
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  res.json(
    {
      id,
      name: 'producto2',
      price: 1220
    }
  )
})

app.get('/categories', (req, res) => {
  res.json({
    id: 1,
    category: 'ropa',
    products: [],
  })
})

app.get('/categories/:categoryId/products', (req, res) => {
  const { categoryId } = req.params;

  res.json({
    categoryId,
    id: 1,
    category: 'ropa',
    products: [
      {
        name: 'Producto1',
        price: 1000,
      },
      {
        name: 'Producto3',
        price: 1000,
      },
      {
        name: 'Producto2',
        price: 1000,
      },
    ],
  })
})


app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId,
    id: 1,
    category: 'ropa',
    products: [
      {
        name: 'Producto2',
        price: 1000,
      },
    ]
  })
})

app.listen(port, () => {
  console.log('estoy corriendo en', port);
});
