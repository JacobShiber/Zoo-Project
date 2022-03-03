const workers = require('../models/workers-model');

const getAllWorkers = async (req, res) => {
    await workers.find()
        .then(result => res.status(200).send(result))
        .catch(err => res.status(404).send({ massage: 'error getting all workers' }));
}

const getWorker = async (req, res) => {
    await workers.findById(req.params.id)
        .then(result => res.status(200).send(result))
        .catch(err => res.status(404).send({ massage: 'error getting worker' }));
}

const addWorker = async (req, res) => {
    await workers.create(req.body)
        .then(result => res.status(200).send(result))
        .catch(err => res.status(404).send({ massage: 'error adding worker' }));
}

const editWorker = async (req, res) => {
    await workers.findByIdAndUpdate(req.params.id, req.body)
        .then(result => res.status(200).send(result))
        .catch(err => res.status(404).send({ massage: 'error editing worker' }));
}

const deleteWorker = async (req, res) => {
    await workers.findByIdAndDelete(req.params.id)
        .then(result => res.status(200).send(result))
        .catch(err => res.status(404).send({ massage: 'error deleting worker' }));
}

module.exports = { getAllWorkers, getWorker, addWorker, editWorker, deleteWorker };