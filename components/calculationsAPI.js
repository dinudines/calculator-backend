const express = require('express');
const router = express.Router();
const { getAll, createOne, clearAll } = require('./calculationsController');

/*
** @route GET /api/calculations
** @description Get all calculations
** @public true
*/
router.get('/', getAll);

/*
** @route POST /api/calculations
** @description Create a single calculation
** @public true
*/
router.post('/', createOne);

/*
** @route DELETE /api/calculations
** @description Clear all calculations
** @public true
*/
router.delete('/', clearAll);


module.exports = router;