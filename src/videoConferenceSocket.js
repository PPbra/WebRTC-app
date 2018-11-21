const openSocket = require('websocket').client;

const ws = new openSocket("ws://");

module.exports = {
    onNewUserJoin: (cb) => {
        ws.onmessage = (res) => {
            //if else res
            //cb(res);
        }
    },
    onJoinRoom: (cb) => {
    }
}
