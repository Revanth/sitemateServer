const express = require("express");
const cors = require("cors");

const app = express()
const port = 3001; //Frontend is running on 3000

app.use(cors())
app.use(express.json())


app.post('/sitemate/api/create', (req, res) => {
    const issue = req.body
    console.log(issue)
    res.json(issue)
})

app.get('/sitemate/api/read', (req, res) => {
    const jiraIssue = { 'ID': 'Bug001', 'Title': 'Sample Title', 'Description': 'Sample description' }
    res.json(jiraIssue)
})

app.put('/sitemate/api/Update', (req, res) => {
    const issue = req.body
    console.log(issue)
})

app.delete('/sitemate/api/delete/:id', (req, res) => {
    console.log(req.params.id)
})

app.listen(port, () => {
    console.log('Server is up and running on port 3001')
})