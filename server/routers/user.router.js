const express = require('express');
const {register, login, uploadAvatar, getAllTrip, getOneTripDetail} = require('../controllers/user.controller');
const {authenticate} = require('../middlewares/auth/authenticate');
const {uploadImage} = require('../middlewares/uploads/upload_avatar');

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/upload-avatar', authenticate, uploadImage('avatar'), uploadAvatar);
userRouter.get('/getAllTrip', getAllTrip);
userRouter.get('/getOneTripDetail', getOneTripDetail);

module.exports = {
    userRouter,
}
