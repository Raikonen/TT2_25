//import express from 'express';

var express = require('express')
var app = express()
const port = "3001"

// Database initialization

var MySQL = require('mysql2')
var db = MySQL.createConnection({
    host: 'localhost',
    user: 'root', // Change this to what your DB username is. Default => 'root'
    password: 'Password', // Change this to what you set your DB password is. 
    database: 'project_expenses' // Default => 'project_expenses', same as the name of your DB
})

db.connect((err) => {
    if (err){
        throw err;
    }
    console.log('MySQL is connected...')

})

app.use(express.json())

const apiBaseUrl = "/api"


// respond with "hello world" when a GET request is made to the homepage
app.post('/login', function (req, res) {
  const { username, password } = req.body
  // Get userId from database, lets just assume that the userId returned is 1.
  res.send({ userId: 1 })
})

app.get(apiBaseUrl + '/projects/:userId', function (req, res) {
  const userId = req.params.userId;

  let sql = `SELECT * FROM project p WHERE p.user_id=` + userId;
  db.query(sql, (error, results, fields) => {
    if (error) {
      return res.send("The following project for the user is not found.");
    }
    res.send(results);
  });
})


app.post('/listexpenses', function (req, res) {
  const { projectId } = req.body
  // Get expenses for a particular project from database
  res.send([{
    "id": 1,
    "project_id": 2,
    "category_id": 2,
    "name": "Server Maintenance",
    "description": "Server maintenance and upgrading work to incorporate BC plans",
    "amount": 30000,
    "created_at": "2021-11-04T16:00:00.000Z",
    "created_by": "Jacky",
    "updated_at": "2021-11-06T16:00:00.000Z",
    "updated_by": "Jacky"
  }])
})

app.post('/addexpense', function (req, res) {
  const { userId, projectId, categoryId, name, description, amount } = req.body
  // Get user name from user’s table
  // Insert into expenses table, remember to update the timestamp fields with the necessary information
  res.send(objectInsertedToDb)
})

app.post('/updateexpense', function (req, res) {
  const { userId, expenseId } = req.body
  // Get user name from user’s table
  // Insert into expenses table, remember to update the timestamp fields with the necessary information
  res.send(updatedObject)
})

app.post('/deleteexpense', function (req, res) {
  const { expenseId } = req.body
  // Delete expense from expenses table
  res.sendStatus(200) // if successfully deleted
})

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});


/* Methods to test the functionality of the database */

// Select posts
app.get('/getposts', (req,res) => {
  let sql = 'SELECT * FROM user';
  let query = db.query(sql, (err,results)=> {
    if (err){
      throw error;
    }
    console.log(results)
    res.send('Posts fetched...')
  })
})