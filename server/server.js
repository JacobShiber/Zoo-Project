require('dotenv').config();
require('./db/zoodb');
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
app.use(express.json());
app.use(cors());

const passport = require('passport');
const passportMiddleware = require('./config/passport');

passportMiddleware(passport);

app.use(passport.initialize());

const animalsRouter = require('./routes/animals-route');
const workersRouter = require('./routes/workers-route');
const usersRouter = require('./routes/users-route');

app.use('/animals', passport.authenticate('jwt', { session: false }), animalsRouter);
app.use('/workers', passport.authenticate('jwt', { session: false }), workersRouter);
app.use('/users', usersRouter);


app.get('/', (req, res) => {
    res.status(200).send('Server is up');
})

app.listen(port);

