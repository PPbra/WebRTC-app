import React, { Component } from 'react';
import 'react-chat-elements/dist/main.css';
import {
    MessageList,
    Input,
    Button,
} from 'react-chat-elements';

import * as socket from '../../socket';

const moment = require('moment');



class MessageContainer extends Component {
    constructor(props) {
        super(props);

        socket.onReceiveMessage((data) => {
            this._addMessage(data, 'left')
        })

        this.state = {
            show: true,
            messageList: [],
            userName: "userName 1",
            isOpenModal: false
        };
    }

    _emitMessage = (value) => {
        const data = {
            value: value,
            userName: this.state.userName
        }
        socket.emitSendMessage(data);
        this._addMessage(data);
    }

    _addMessage(data, position = 'right') {
        var list = this.state.messageList;
        const message = {
            text: data.value,
            position: position,
            type: 'text',
            avatarFlexible: true,
            statusColor: 'lightgreen',
            title: data.userName,
            date: new Date(),
            dateString: moment(new Date()).format('HH:mm'),
        }

        list.push(message);
        this.setState({
            messageList: list,
        });
    }
    render() {
        return (
            <div
                className='right-panel'
            >
                <div
                    id="message-container"
                >
                    <MessageList
                        className='message-list'
                        lockable={true}
                        downButtonBadge={10}
                        dataSource={this.state.messageList}
                    />
                </div>

                <Input
                    placeholder="Type message"
                    defaultValue=""
                    ref='input'
                    multiline={true}
                    buttonsFloat='left'
                    onKeyPress={(e) => {
                        if (e.shiftKey && e.charCode === 13) {
                            return true;
                        }
                        if (e.charCode === 13) {
                            this._emitMessage(this.refs.input.state.value);
                            this.refs.input.clear();
                            e.preventDefault();
                            return false;
                        }
                    }}
                    leftButtons={
                        <Button
                            color='white'
                            backgroundColor='green'
                            text='Call'
                            onClick={this.props.onCloseModal}
                        />
                    }
                    rightButtons={
                        <Button
                            text='Send'
                            onClick={this._addMessage.bind(this)} />

                    } />
            </div>
        )
    }
}

export default MessageContainer;