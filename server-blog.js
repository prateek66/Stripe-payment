const express = require ('express')
const mongoose =require ('mongoose')
const bodyParser = require ('body-parser')
const router = require('./routes/post')
const config = require('./config')
const app = express();

// init mongoose
mongoose.connect(config.db);

// express middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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

// export
module.exports = server;