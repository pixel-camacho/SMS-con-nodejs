const messageResponse = require('twilio').twiml.MessagingResponse;
const {sendMessage} = require('../twilio/send-sms');
const SMS =  require('../models/sms');
const MessagingResponse = require('twilio/lib/twiml/MessagingResponse');


const indexController = async (req, res) => {
  const messages = await SMS.find().lean();
  res.render("index", { messages });
};

const postMessage = async (req, res) => {
  const { message, phone } = req.body;

  if (!message || !phone) return res.json("Missing message or phone");

  const result = await sendMessage(req.body.message, req.body.phone);

  console.log(result.sid);

  await SMS.create({ Body: req.body.message, To: req.body.phone });

  res.redirect("/");
};

const receiveMessage = async (req , res) => 
{
    console.log(req.body.Body);

const  savedSMS = await SMS.create({
        Body: req.body.Body,
        From: req.body.From
    });

    const twiml =  new MessagingResponse();

    // twiml.message('This is my response');

    res.send(twiml.toString());

};

module.exports = { indexController, postMessage, receiveMessage };
