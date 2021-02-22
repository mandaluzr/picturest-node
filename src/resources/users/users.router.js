const { Router } = require('express');
const boardsController = require('../boards/boards.controller');
const pinsController = require('../pins/pins.controller');
const usersController = require('./users.controller');
const router = Router();
const { body } = require('express-validator');

router.route('/')
.get(usersController.getAll)
.post(
body('email').isEmail(),
body('password').isLength({ min: 5 }),
  usersController.create);
router
  .route('/:id')
  .get(usersController.getOne)
  .patch(usersController.update)
  .delete(usersController.remove);

router.route('/:userId/boards').get(boardsController.getAllOfUser);
router.route('/:userId/pins').get(pinsController.getAllOfUser);

module.exports = router;
