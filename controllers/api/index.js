const router = require("express").Router();

const commentRoutes = require("./Comment-route");
const postRoutes = require("./Post-routes");
const userRoutes = require("./User-routes");

router.use("/comment", commentRoutes);
router.use("/post", postRoutes);
router.use("/user", userRoutes);

module.exports = router;
