const express = require('express');
const router = express.Router();

const {createTodo,updateTask,deleteTask} = require('../controllers/todoController');


router.route('/').post(createTodo);
router.route('/:id').put(updateTask);
router.route('/:id').delete(deleteTask);

module.exports = router;