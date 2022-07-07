"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/" , ctrl.greeting);
router.get("/login" , ctrl.login);

module.exports = router;