import React, { Component } from "react";
import { Row, Col, Panel, ListGroup, ListGroupItem, Image } from "react-bootstrap";
import { Player } from 'video-react';

// import Card from "components/Card/Card.jsx";
// import { thArray, tdArray } from "variables/Variables.jsx";
import './ChatRoom.css';

class ChatRoom extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col md="9" >
            <Player autoPlay={true}>
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
          </Col>
          <Col md="3" >
            <Panel>
              <Panel.Heading>Chat list</Panel.Heading>
              <Panel.Body>Control panel</Panel.Body>
              <ListGroup className="chat-list-users">
                <ListGroupItem>
                  <div className="chatroom-card-user">
                    <div className="user-pic-profile">
                      <Image src="https://picsum.photos/40/40" circle />
                    </div>
                    <div className="user-name">username 1</div>
                    <i class="fas fa-phone user-action-call"></i>
                    <div className="user-is-online" style={{ "color": "green  " }}>online</div>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="chatroom-card-user">
                    <div className="user-pic-profile">
                      <Image src="https://picsum.photos/40/40" circle />
                    </div>
                    <div className="user-name">username 1</div>
                    <i class="fas fa-phone user-action-call"></i>
                    <div className="user-is-online" style={{ "color": "green  " }}>online</div>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="chatroom-card-user">
                    <div className="user-pic-profile">
                      <Image src="https://picsum.photos/40/40" circle />
                    </div>
                    <div className="user-name">username 1</div>
                    <i class="fas fa-phone user-action-call"></i>
                    <div className="user-is-online" style={{ "color": "green  " }}>online</div>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="chatroom-card-user">
                    <div className="user-pic-profile">
                      <Image src="https://picsum.photos/40/40" circle />
                    </div>
                    <div className="user-name">username 1</div>
                    <i class="fas fa-phone user-action-call"></i>
                    <div className="user-is-online" style={{ "color": "green  " }}>online</div>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="chatroom-card-user">
                    <div className="user-pic-profile">
                      <Image src="https://picsum.photos/40/40" circle />
                    </div>
                    <div className="user-name">username 1</div>
                    <i class="fas fa-phone user-action-call"></i>
                    <div className="user-is-online" style={{ "color": "green  " }}>online</div>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="chatroom-card-user">
                    <div className="user-pic-profile">
                      <Image src="https://picsum.photos/40/40" circle />
                    </div>
                    <div className="user-name">username 1</div>
                    <i class="fas fa-phone user-action-call"></i>
                    <div className="user-is-online" style={{ "color": "green  " }}>online</div>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="chatroom-card-user">
                    <div className="user-pic-profile">
                      <Image src="https://picsum.photos/40/40" circle />
                    </div>
                    <div className="user-name">username 1</div>
                    <i class="fas fa-phone user-action-call"></i>
                    <div className="user-is-online" style={{ "color": "green  " }}>online</div>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="chatroom-card-user">
                    <div className="user-pic-profile">
                      <Image src="https://picsum.photos/40/40" circle />
                    </div>
                    <div className="user-name">username 1</div>
                    <i class="fas fa-phone user-action-call"></i>
                    <div className="user-is-online" style={{ "color": "green  " }}>online</div>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="chatroom-card-user">
                    <div className="user-pic-profile">
                      <Image src="https://picsum.photos/40/40" circle />
                    </div>
                    <div className="user-name">username 1</div>
                    <i class="fas fa-phone user-action-call"></i>
                    <div className="user-is-online" style={{ "color": "green  " }}>online</div>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="chatroom-card-user">
                    <div className="user-pic-profile">
                      <Image src="https://picsum.photos/40/40" circle />
                    </div>
                    <div className="user-name">username 1</div>
                    <i class="fas fa-phone user-action-call"></i>
                    <div className="user-is-online" style={{ "color": "green  " }}>online</div>
                  </div>
                </ListGroupItem>
              </ListGroup>
              <Panel.Body>Some more panel content here.</Panel.Body>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ChatRoom;
