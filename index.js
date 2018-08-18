const express = require('express');
require('./services/passport');  //running the passport.js for the strategy



const app = express();

// app.get('/', (req, res) => {
//   res.send({ hi: 'After crazy dance & changes for S3 ...' });
// });

require('./routes/authRoutes')(app);  // calls the function authRoutes


const PORT = process.env.PORT || 5000;
app.listen(PORT);
