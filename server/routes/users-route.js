const usersRouter = require('express').Router();
const usersActions = require('../controllers/users-ctrl');

usersRouter.post('/login', usersActions.login);
usersRouter.post('/register', usersActions.register);

module.exports = usersRouter;