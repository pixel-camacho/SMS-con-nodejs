const config = require('../config');
const client =   require('twilio')(config.accountId, config.accountToken);


async function  sendMessage(body, phone){
    try {

        const message =  await  client.messages.create({
            to: phone,
            from: '+17047074414',
            body
        });
        console.log(message.sid);
        return message;

    } catch (error) {
           console.log(error);       
    } 
}

module.exports =  { sendMessage };