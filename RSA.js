const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const NodeRSA = require('node-rsa');


const client = new Client();


client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Please scan the QR code with WhatsApp to login.');
});


client.on('ready', () => {
    console.log('WhatsApp Client is ready!');

    // Public Key for encryption
    const publicKey = `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxYqMz317a7dDqsRSRzkl
    54X00f0JNNTJqiwtgchF8dXxLfn+ZlZRf7rBpwRdFG+cMU1ZGzN4o/wCGfBuUNA8
    BMAsAzYKULWHIZPNfgMBbuX0XNzVtybQXPxP0sVt5BiUImDaN3KbNe5ykJCwt5t6
    KKgsMRzSZMoQer9QCt7BZW6y20UMZ61ww3+lqmSVhCq9NyFsQ/sSoA3xVe4jLbCY
    zI5yqoX/PDJ7GiSyLxhC54T4A2LYrBdQTaJBbqzlU0/QI7RiE8w9zW0UPNzpllnf
    q6NGlpP2se/7hOfUv/9/KbjZFhy31edJI/oL/2yJWfZBUTmy8N4wQyyGXxFPqC5o
    HwIDAQAB
    -----END PUBLIC KEY-----
                        `;

    // Create RSA object using the public key
    const recipientPublicKey = new NodeRSA(publicKey, 'pkcs8-public');

    // Message to be encrypted and sent
    const message = 'We deserve full mark in this course';
    const encryptedMessage = recipientPublicKey.encrypt(message, 'base64');
    console.log("Encrypted Message:", encryptedMessage);

   // Send the encrypted message via WhatsApp
    const number = '966537181315';  
    const chatId = `${number}@c.us`; 

            client.sendMessage(chatId, encryptedMessage).then(response => {
        console.log('Message sent successfully!', response);
    }).catch(err => {
        console.error('Error sending message:', err);
    });
});


client.initialize();
