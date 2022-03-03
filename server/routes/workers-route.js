const workersRouter = require('express').Router();
const workersActions = require('../controllers/workers.ctrl');

workersRouter.get('/', workersActions.getAllWorkers);
workersRouter.get('/:id', workersActions.getWorker);
workersRouter.post('/', workersActions.addWorker);
workersRouter.put('/:id', workersActions.editWorker);
workersRouter.delete('/:id', workersActions.deleteWorker);

module.exports = workersRouter;