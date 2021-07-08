const { Router } = require("express")
const blogcontroller = require("../controller/blogcontroller")

const router = Router();

router.get("/", blogcontroller.blog_index);
router.get("/create", blogcontroller.blog_create);
router.get("/:id", blogcontroller.blog_details);
router.post("/", blogcontroller.blog_post);
router.delete("/:id", blogcontroller.blog_delete);

module.exports=router;