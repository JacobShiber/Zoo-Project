const animals = require('../models/animals-model');

const getAllAnimals = async (req, res) => {
        await animals.find()
        .then(result => res.status(200).send(result))
        .catch(err => res.status(404).send({massage : 'error with getting all animals'}));
}

const getAnimal = async (req, res) => {
    await animals.findById(req.params.id)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send({massage : 'error with getting animal with id'}));
}

const addAnimal = async (req, res) => {
    await animals.create(req.body)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send({massage : 'error with adding new animal'}));
}

const editAnimal = async (req, res) => {
    await animals.findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send({massage : 'error with editing animal'}));
}

const deleteAnimal = async (req, res) => {
    await animals.findByIdAndDelete(req.params.id)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send({massage : 'error with deleting animal'}));
}

module.exports = {getAllAnimals, getAnimal, addAnimal, editAnimal, deleteAnimal};