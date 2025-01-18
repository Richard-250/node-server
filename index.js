const express = require('express');
const { readFile } = require('fs').promises;
const mongoose = require('mongoose');
const Product  = require('./models/product.model.js');
const { error } = require('console');
const app = express();


app.use(express.json())


const port = process.env.PORT || 3000;

// Serve the home route
app.get('/', async (req, res) => {
  try {
    const content = await readFile('./home.html', 'utf8');
    res.send(content);
  } catch (error) {
    res.status(500).send('Error loading the home page.');
  }
});

app.get('/api/products', async (req, res) => {
  try {
     const products = await Product.find({});
     res.status(200).json(products)
  } catch(error) {
      
    res.status(500).json({message: error.message});
  }
});

app.get('/api/products/:id', (req, res) => {
  try {

  } catch(error) {
     res.status(500).json({message: error.message});
  }
});

app.post('/api/products', async (req, res) => {
  try{
   const product = await Product.create(req.body);
   res.status(200).json(product)
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})

// Start the server



mongoose.connect("mongodb+srv://cyubahirorichard250:mongodb12345@backenddb.bs062.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB")
.then(() => {
  console.log('connected to database!');

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
})
.catch((error) => {
  console.log('connection Failed!', error.message);
});

// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'ipray.v@gmail.com',
//     pass: 'ipray@2005.rw'
//   }
// });

// var mailOptions = {
//   from: 'ipray.v@gmail.com',
//   to: 'cyubahirorichard250@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });


