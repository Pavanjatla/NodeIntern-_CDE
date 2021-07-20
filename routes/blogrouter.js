const { Router } = require("express")
const blogcontroller = require("../controller/blogcontroller")
const requireUser=require("../middlewares/requireUser")

const router = Router();

router.get("/", blogcontroller.blog_index);
router.get("/create",requireUser, blogcontroller.blog_create);
router.get("/:id", blogcontroller.blog_details);
router.post("/", blogcontroller.blog_post);
router.delete("/:id", blogcontroller.blog_delete);
router.put("/:id", blogcontroller.blog_update_post);

module.exports=router;