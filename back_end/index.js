import express from 'express';
import bodyParser from 'body-parser'

var app = express()
const port = "3001"

app.use(express.json())

// respond with "hello world" when a GET request is made to the homepage
app.post('/login', function (req, res) {
  const { username, password } = req.body
  // Get userId from database, lets just assume that the userId returned is 1.
  res.send({ userId: 1 })
})

app.post('/listprojects', function (req, res) {
  const { userId } = req.body
  // Get projects from database
  res.send([{
    "id": 2,
    "user_id": 1,
    "name": "SWT",
    "budget": 80000,
    "description": "Smart Watch Tracker"
  }])
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
