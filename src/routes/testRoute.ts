// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require("express");
const router = express.Router();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const testController = require("../controllers/testController")

router.get("/",testController.test1)



module.exports = router;