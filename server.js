const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();
const bodyparser = require('body-parser');

const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const profile = require('./routes/api/profiles');
const posts = require('./routes/api/posts');
const passport = require('passport');

//Body parser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extend: false}))

//Connect to db
mongoose
    .connect(db)
    .then(() => console.log('MongoDb connected'))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

//passport config
require('./config/passport')(passport);

// First route
app.get('/', (req, res) => res.send('Hello'));

<<<<<<< HEAD
const port = process.env.PORT || 5200;
app.listen(port, () => console.log(`Server running on port ${port}`));
=======
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);



const port = process.env.PORT || 5200;
app.listen(port, () => console.log(`Server running on port ${port}`));
>>>>>>> 620ac38eba4663e0872a24b7e7e431025fa870e7
