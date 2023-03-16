"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/push');

router.get("/", ctrl.push);
    
module.exports = router;
