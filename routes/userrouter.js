const { Router } = require("express");
const usercontroller = require("../controller/usercontroller");

const router = Router();

router.get("/sign-up", usercontroller.user_create);
router.post("/sign-up", usercontroller.user_create_post);
router.get("/log-in", usercontroller.user_login);
router.post("/log-in", usercontroller.user_login_post);
router.get("/log-out", usercontroller.user_log_out);

module.exports = router;