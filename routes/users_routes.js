const express = require('express');
const {body} = require('express-validator');

const router = express.Router();

const multer = require('multer');
const diskStorage = multer.diskStorage({
    dstination: function(req, ffile,cb) {
        console.log("file", file);
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
        const ext = file.mimetype.split('/')[1];
        const filename = `user-${date.now()}.${ext}`;
        cb(null, filename);
    }
})

const fileFilter = (req, file, cb) => {
    const imageType = file.mimetype.split('/')[0];

    if(imageType === 'image'){
        return cb(null, true)
    } else {
        return cb(appError.create("the file must be an image", 400), false)
    }

}
const upload = multer({
    storage: diskStorage,
    fileFilter
})
const usersController = require('../controller/users.controller');
const verifyToken = require('../middleware/verifyToken');

//get all users
//register
//login


router.route('/')
            .get(verifyToken,usersController.getAllUsers)

router.route('/register')
            .post(upload.single('avatar'),usersController.register)

router.route('/login')
            .post(usersController.login)




module.exports = router;