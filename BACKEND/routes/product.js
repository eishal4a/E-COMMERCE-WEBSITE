const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');
const app = express();

app.use(express.json()); // To parse JSON
app.use('/api/products', productRoutes);

mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ MongoDB connected');
  app.listen(4000, () => console.log('✅ Server running on port 4000'));
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
});
