import openSocket from 'socket.io-client';
const socket = openSocket('https://realtime-chat-for-rtcapp.herokuapp.com');


const onRecieveMessage = (cb) =>{
    socket.on('recieve-message',(data)=>cb(data));
}

const emitSendMessage = (data) =>{
    socket.emit('send-message',data);
}

export {onRecieveMessage,emitSendMessage};