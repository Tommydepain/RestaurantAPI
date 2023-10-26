const express = require('express');
const app = express();
const port = 8080; // Le port sur lequel votre application écoutera
const db=require('./database') 

app.use(express.json())
// const bodyParser = require('body-parser')
// const BasicAuth = require('express-basic-auth')
 
 
// const Auth = BasicAuth({
//   users: {
//     'admin': 'admin'
//   },
//   challenge: false
// })
// app.use(bodyParser.json())
 
/// Item ///
 
app.get('/Item', (req, res) => {
  console.log(req.query)
  //if (!req.query.CATEGORY) {
    db.query(
      'SELECT * FROM Item',
      function (err, results) {
        console.log(results)
        res.send(results);                       
      }
    )
 // }
});
 
app.delete('/Item/:id', function (req, res) {
  db.query('DELETE FROM `Item` WHERE `Item_ID`=?', [req.params.id], function (error, results, fields){
    if(error){
      console.log(error)
      res.status(400).send("error")
      throw error;
    }
    res.send('deleted!')
  })
});
 
app.post('/Item', (req, res) => {
  const name = req.body.name
  const description = req.body.description
  const price = req.body['price']
  db.query('INSERT INTO Item ( ItemName, ItemDescription, ItemPrice ) VALUE(?,?,?)',[name,description,price],(err,result)=>{
    if (err){
      console.log(err)
      res.status(400).send("error")
    }
    else {
      console.log(result)
      res.status(201).send("posted")
    }
  })
})

app.put('/Item/:id', function (req, res) {
  db.query('UPDATE `Item` SET `ItemName`=?,`ItemDescritpion`=?,`ItemPrice`=? where `Item_ID`=?', [req.body.name,req.body.description, req.body['price'], req.params.id], function (error, results,) {
      if(error){
          console.log(error)
          res.status(400).send("error")
      }
      res.send(JSON.stringify(results));
  });
});
 
 
app.get('/Item?parameters', (req, res) => {
  console.log(req.params.id)
  db.query(
    `SELECT * FROM Item WHERE ${parameters} = ${req.params.id}`,
    function (err, results) {
      console.log(results)
      res.send(results);
    }
  )
});
 
app.get('/Item', (req, res) => {
  res.send(' chocolat');
});
 
app.get('/Item/:id', (req, res) => {
  console.log(req.params.id)
  db.query(
    `SELECT * FROM Item WHERE Item_ID = ${req.params.id}`,
    function (err, results) {
      console.log(results)
      res.send(results);
    }
  )
});
 
 
// /Item READ get all Item client, admin
// /Item?parameters READ get all Item matching filters client, admin
// /Item CREATE add a new item admin
// /Item/{id} READ get an item client, admin
// /Item/{id} UPDATE change an item properties admin
// /Item/{id} DELETE delete an item admin
 
 
/// CATEGORY ///
 
app.get('/category', (req, res) => {
  console.log(req.query)
  if (!req.query.Category) {
    db.query(
      'SELECT * FROM Category',
      function (err, results) {
        console.log(results)
        res.send(results);                       
      }
    )
  }
});
 
 
app.post('/category', (req, res) => {
  const name = req.body.name

  db.query('INSERT INTO Category (CategoryName) VALUE(?,?)',[name,],(err,result)=>{
    if (err){
      console.log(err)
      res.status(400).send("error")
    }
    else {
      console.log(result)
      res.status(201).send("posted")
    }
  })
})
 
app.delete('/category/:id', function (req, res) {
  db.query('DELETE FROM `Category` WHERE `id_category`=?', [req.params.id], function (error, results, fields){
    if(error){
      console.log(error)
      res.status(400).send("error")
      throw error;
    }
    res.send('deleted!')
  })
});
 
app.put('/category/:id', function (req, res) {
  db.query('UPDATE `Category` SET `CategoryName`=?, where `id_category`=?', [req.body.name, req.body.description, req.params.id], function (error, results,) {
      if(error){
          console.log(error)
          res.status(400).send("error")
      }
      res.send(JSON.stringify(results));
  });
});
 
app.get('/category/:id', (req, res) => {
  console.log(req.params.id)
  db.query(
    `SELECT * FROM Category WHERE id_category= ${req.params.id}`,
    function (err, results) {
      console.log(results)
      res.send(results);
    }
  )
});
 
// /categories READ get all item categories client, admin
// /categories CREATE add a new item category admin
// /categories/{id} READ get an item category client, admin
// /categories/{id} UPDATE change an item category properties admin
// /categories/{id} DELETE delete an item category admin
 
 
// FORMULA
 
app.get('/formula', (req, res) => {
  console.log(req.query)
  if (!req.query.CATEGORY) {
    db.query(
      'SELECT * FROM Formula',
      function (err, results) {
        console.log(results)
        res.send(results);                       
      }
    )
  }
});
 
 
app.post('/formula', (req, res) => {
  const name = req.body.name
  const description = req.body.description
  const formula_price= req.body['FormulaPrice']
  db.query('INSERT INTO Formula (FormulaName , CategoryInFormula, FormulaPrice) VALUE(?,?,?)',[name,description,formula_price],(err,result)=>{
    if (err){
      console.log(err)
      res.status(400).send("error")
    }
    else {
      console.log(result)
      res.status(201).send("posted")
    }
  })
})
 
app.delete('/formula/:id', function (req, res) {
  db.query('DELETE FROM `Formula` WHERE `Formula_ID`=?', [req.params.id], function (error, results, fields){
    if(error){
      console.log(error)
      res.status(400).send("error")
      throw error;
    }
    res.send('deleted!')
  })
});
 
 
app.get('/formula/:id', (req, res) => {
  console.log(req.params.id)
  db.query(
    `SELECT * FROM Formula WHERE Formula_ID= ${req.params.id}`,
    function (err, results) {
      console.log(results)
      res.send(results);
    }
  )
});
 
 
  
app.listen(port, () => {
  console.log(`L'application Express écoute sur le port ${port}`);
  db.connect(function(err){
    if(err)throw err;
    console.log('Database Connect')
  })
});