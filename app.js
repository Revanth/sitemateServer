const express = require("express");

const app = express()
const port = 3001; //Frontend is running on 3000

app.use(express.json())

const jiraIssue = {'ID': 'Bug001', 'Title': 'Sample Title', 'Description': 'Sample description'}

app.post('/sitemate/api/create', (req, res) => {
    const issue = req.body
    console.log(issue)
    res.json(issue)
})

app.get('/sitemate/api/read', (req, res) => {
    
})

app.get('/sitemate/api/Update', (req, res) => {
    
})

app.get('/sitemate/api/delete', (req, res) => {
    
})

app.listen(port, () => {
    console.log('Server is up and running on port 3001')
})