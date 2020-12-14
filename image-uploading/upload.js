//for uploading files
const multer = require('multer')
const upload = multer({
  dest:'img'
})
app.post('/upload', upload.single('upload'),(req,res) => {
  res.send('file uploaded succesfully')
})
app.post('/uploads', upload.array('uploads'), async(req,res) => {
  res.send('200')
})
