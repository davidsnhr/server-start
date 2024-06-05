const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const ragController = require('../controllers/ragController');

const geminiController = require('../controllers/geminiController');


router.post('/', chatController.getResponseChat);
router.get('/context', ragController.getContextResponse);

router.post('/gemini', geminiController.getResponseChatGemini);


module.exports = router;
