const express = require('express');
const router = express.Router();
const calculationsAPI = require('../../components/calculationsAPI');

router.use('/calculations', calculationsAPI);

module.exports = router;