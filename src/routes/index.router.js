const {Router} =  require('express');
const {indexController, postMessage,  receiveMessage}=  require('../controller/index-controller');

const  router = Router();

// Main Routes
router.get('/', indexController);

// Send an SMS
router.post('/send-sms', postMessage);

//Receive an SMS
router.post('/sms', receiveMessage);

module.exports = router;