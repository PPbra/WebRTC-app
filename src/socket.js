const openSocket = require('socket.io-client');
const socket = openSocket('https://realtime-chat-for-rtcapp.herokuapp.com');

const onReceiveMessage = (cb) => {
    socket.on('recieve-message', (data) => cb(data));
}

const emitSendMessage = (data) => {
    socket.emit('send-message', data);
}

module.exports = { onReceiveMessage, emitSendMessage };