const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoute = require("./home-route.js");
const dashRoute = require("./dashboard-route.js");

router.use("/", homeRoute);
router.use("/dashboard", dashRoute);
router.use("/api", apiRoutes);

module.exports = router;
