const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const bodyParser = require("body-parser");
const User = require("./models/User");
const passport = require("passport");
const path = require("path");

mongoose
    .connect(db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    })
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res) => {res.send('Hello World')});

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;
app.listen(port, () => {console.log(`Server is running on port ${port}`)});

