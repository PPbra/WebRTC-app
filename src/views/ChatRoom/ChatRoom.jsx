import React, { Component } from "react";
import {
  Row,
  Col,
  Panel,
  ListGroup,
  ListGroupItem,
  Image,
  Grid
} from "react-bootstrap";

import './ChatRoom.css';

import 'react-chat-elements/dist/main.css';
import {
  MessageList,
  Input,
  Button,
} from 'react-chat-elements';

import * as socket from '../../socket';

const moment = require('moment');




class ChatRoom extends Component {


  constructor(props) {
    super(props);
      socket.onRecieveMessage((data)=>{
          this._addMessage(data,'left')
      })

    this.state = {
      show: true,
      messageList: [],
      userName:"userName 1"
    };
  }

  componentWillMount() {
    // setInterval(this._addMessage.bind(this), 3000);
  }

  

  _emitMessage = (value) =>{
    const data = {
      value:value,
      userName:this.state.userName
    }
    socket.emitSendMessage(data);
    this._addMessage(data);
  }

  _addMessage(data,position='right') {
    var list = this.state.messageList;
    const message = {
      text:data.value,
      position:position,
      type:'text',
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
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md="9">
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
                    text='Call'/>
                  }
                  rightButtons={
                    <Button
                      text='Send'
                      onClick={this._addMessage.bind(this)} />
                      
                  } />
              </div>
            </Col>
            <Col md="3">
              <Panel>
                <Panel.Heading>Chat list</Panel.Heading>
                <Panel.Body>Control panel</Panel.Body>
                <ListGroup className="chat-list-users">
                  <ListGroupItem>
                    <div className="chatroom-card-user">
                      <div className="user-pic-profile">
                        <Image src="https://picsum.photos/40/40" circle />
                      </div>
                      <div className="user-name">Group 1</div>
                      <i class="fas fa-plus-circle"></i>
                      <div
                        className="user-is-online"
                        style={{
                          "color": "green"
                        }}>Calling</div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="chatroom-card-user">
                      <div className="user-pic-profile">
                        <Image src="https://picsum.photos/40/40" circle />
                      </div>
                      <div className="user-name">Group 1</div>
                     <i class="fas fa-plus-circle"></i>
                      <div
                        style={{
                          "color": "red"
                        }}>offline</div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="chatroom-card-user">
                      <div className="user-pic-profile">
                        <Image src="https://picsum.photos/40/40" circle />
                      </div>
                      <div className="user-name">Group 1</div>
                     <i class="fas fa-plus-circle"></i>
                      <div
                        className="user-is-online"
                        style={{
                          "color": "red"
                        }}>offline</div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="chatroom-card-user">
                      <div className="user-pic-profile">
                        <Image src="https://picsum.photos/40/40" circle />
                      </div>
                      <div className="user-name">Group 1</div>
                     <i class="fas fa-plus-circle"></i>
                      <div
                        className="user-is-online"
                        style={{
                          "color": "green"
                        }}>Calling</div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="chatroom-card-user">
                      <div className="user-pic-profile">
                        <Image src="https://picsum.photos/40/40" circle />
                      </div>
                      <div className="user-name">Group 1</div>
                     <i class="fas fa-plus-circle"></i>
                      <div
                        className="user-is-online"
                        style={{
                          "color": "green"
                        }}>Calling</div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="chatroom-card-user">
                      <div className="user-pic-profile">
                        <Image src="https://picsum.photos/40/40" circle />
                      </div>
                      <div className="user-name">Group 1</div>
                     <i class="fas fa-plus-circle"></i>
                      <div
                        className="user-is-online"
                        style={{
                          "color": "red"
                        }}>offline</div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="chatroom-card-user">
                      <div className="user-pic-profile">
                        <Image src="https://picsum.photos/40/40" circle />
                      </div>
                      <div className="user-name">Group 1</div>
                     <i class="fas fa-plus-circle"></i>
                      <div
                        className="user-is-online"
                        style={{
                          "color": "green"
                        }}>Calling</div>
                    </div>
                  </ListGroupItem>
                  
                </ListGroup>
                <Panel.Body>Some more panel content here.</Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ChatRoom;
