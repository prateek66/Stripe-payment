const express = require ('express')
const mongoose =require ('mongoose')
const bodyParser = require ('body-parser')
const router = require('./routes/post')
const config = require('./config');
const cors = require('cors');

const app = express();
const category = require('./routes/category')
<<<<<<< HEAD
//app.use(cors());
=======
app.use(cors());
>>>>>>> c86fb3fb38e626815c22c4a162fc3d8334c33a95


// init mongoose
mongoose.connect(config.db, {useNewUrlParser: true})
.then(() => console.log("connected successfully"))
.catch((err) => {return console.error("Could not connect:", err)} );


// express middleware
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '5000kb'}));
let server;
if (process.env.NODE_ENV !== config.test_env) {
  server = app.listen(config.port);
  console.log(`Server listening on port ${config.port}`);
} else {
  server = app.listen(config.test_port);
  console.log(`Server listening on port ${config.test_port}`);
}

// router
router(app);
category(app);
//app.use('/category',category)

// export
module.exports = server;