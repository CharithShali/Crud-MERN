const {Router} = require("express")
const{getTask,SaveTask,UpdateTask,DeleteTask}=require("../controllers/TaskController")
const router=Router();

router.get("/get",getTask);
router.post("/add",SaveTask);
router.put("/update/:id",UpdateTask);
router.delete("/delete/:id",DeleteTask);

module.exports = router;