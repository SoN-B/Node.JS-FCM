"use strict";

const express = require('express');
const router = express.Router();

const pushRoute = require('./push');

router.use("/push", pushRoute);

router.use("/", (req, res) => {
    res.render('firebase');
})

module.exports = router;
