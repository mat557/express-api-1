const express = require('express');
const usersControllers = require('../../controllers/user.controller');
const router = express.Router();


router.route('/')
.get(usersControllers.getAllusers)
.get(usersControllers.getQueryusers)
.post(usersControllers.postUser)



router.route('/:id')
.get(usersControllers.getSingleusers)
.delete(usersControllers.deleteSingleUser)
.patch(usersControllers.updateDocument)



module.exports =  router;