const express = require('express');
const {body} = require('express-validator');

const router = express.Router();

const coursesController = require('../controller/courses.controller')
const verifyToken = require('../middleware/verifyToken');
const allowedTo = require('../middleware/allowedTo');
router.route('/')
            .get(coursesController.getAllCourse)
            .post( verifyToken, allowedTo(userRoles.MANAGER),
                [
                    body('title')
                        .notEmpty()
                        .isLength({min: 2})
                        .withMessage("title at least is 2 digit"),
                    body('price')
                        .notEmpty()
                        .withMessage("price is required")
            
                ], coursesController.addCourse)


router.route('/:courseId')
            .get(coursesController.getCourse)
            .patch(coursesController.updateCousre)
            .delete(verifyToken,allowedTo(userRoles.ADMIN, userRoles.MANAGER), coursesController.deleteCourse)

module.exports = router;