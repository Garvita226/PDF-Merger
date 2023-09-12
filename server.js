const express = require('express')
const path = require('path')
const mergePdfs = require('./merge')

const app = express()
app.use('/static', express.static('public'))

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/index.html'))
})

app.post('/merge', upload.array('pdfs', 2), async (req, res) => {
    // console.log(req.files)
    console.log(path.join(__dirname, req.files[0].path))
    let d = await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
    res.redirect(`http://localhost:3000/static/${d}.pdf`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})