const animalRouter = require('express').Router();
const animalActions = require('../controllers/animals-ctrl');

animalRouter.get('/', animalActions.getAllAnimals);
animalRouter.get('/:id', animalActions.getAnimal);
animalRouter.post('/', animalActions.addAnimal);
animalRouter.put('/:id', animalActions.editAnimal);
animalRouter.delete('/:id', animalActions.deleteAnimal);

module.exports = animalRouter;