const userController = require('../controllers/userController')
const childController = require('../controllers/childController')


const router = require('express').Router()

//CHILDREN ROUTES
router.post("/user/:id/child/create",childController.createChild )
router.get("/user/:id/children",childController.getAllChildren )
router.delete("/user/:id/delete/children", childController.deleteAllChildren )

//USERS ROUTES
router.post("/user/create", userController.createUser )
router.get("/users",userController.getAllUsers )
router.put("/user/update/:id",userController.updateUser )
router.delete("/user/delete/:id",userController.deleteUser )

module.exports = router