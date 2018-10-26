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
// import { Player, ReplayControl, TimeDivider, PlaybackRateMenuButton, VolumeMenuButton } from 'video-react';

// import Card from "components/Card/Card.jsx"; import { thArray, tdArray } from
// "variables/Variables.jsx";
import './ChatRoom.css';
// import ForwardControl from "video-react/lib/components/control-bar/ForwardControl";
// import CurrentTimeDisplay from "video-react/lib/components/time-controls/CurrentTimeDisplay";
// import ControlBar from "video-react/lib/components/control-bar/ControlBar";

class ChatRoom extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md="9">
              <video width="100%" autoPlay>
                <source
                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                  type="video/mp4" />
                Your browser does not support the video tag.
                            </video>
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
                      <div className="user-name">username 1</div>
                      <i class="fas fa-phone user-action-call"></i>
                      <div
                        className="user-is-online"
                        style={{
                          "color": "green "
                        }}>online</div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="chatroom-card-user">
                      <div className="user-pic-profile">
                        <Image src="https://picsum.photos/40/40" circle />
                      </div>
                      <div className="user-name">username 2</div>
                      <i class="fas fa-phone user-action-call"></i>
                      <div
                        className="user-is-online"
                        style={{
                          "color": "green "
                        }}>online</div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="chatroom-card-user">
                      <div className="user-pic-profile">
                        <Image src="https://picsum.photos/40/40" circle />
                      </div>
                      <div className="user-name">username 3</div>
                      <i class="fas fa-phone user-action-call"></i>
                      <div
                        className="user-is-online"
                        style={{
                          "color": "green "
                        }}>online</div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="chatroom-card-user">
                      <div className="user-pic-profile">
                        <Image src="https://picsum.photos/40/40" circle />
                      </div>
                      <div className="user-name">username 4</div>
                      <i class="fas fa-phone user-action-call"></i>
                      <div
                        className="user-is-online"
                        style={{
                          "color": "green "
                        }}>online</div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="chatroom-card-user">
                      <div className="user-pic-profile">
                        <Image src="https://picsum.photos/40/40" circle />
                      </div>
                      <div className="user-name">username 5</div>
                      <i class="fas fa-phone user-action-call"></i>
                      <div
                        className="user-is-online"
                        style={{
                          "color": "green "
                        }}>online</div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="chatroom-card-user">
                      <div className="user-pic-profile">
                        <Image src="https://picsum.photos/40/40" circle />
                      </div>
                      <div className="user-name">username 6</div>
                      <i class="fas fa-phone user-action-call"></i>
                      <div
                        className="user-is-online"
                        style={{
                          "color": "green "
                        }}>online</div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="chatroom-card-user">
                      <div className="user-pic-profile">
                        <Image src="https://picsum.photos/40/40" circle />
                      </div>
                      <div className="user-name">username 7</div>
                      <i class="fas fa-phone user-action-call"></i>
                      <div
                        className="user-is-online"
                        style={{
                          "color": "green "
                        }}>online</div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="chatroom-card-user">
                      <div className="user-pic-profile">
                        <Image src="https://picsum.photos/40/40" circle />
                      </div>
                      <div className="user-name">username 8</div>
                      <i class="fas fa-phone user-action-call"></i>
                      <div
                        className="user-is-online"
                        style={{
                          "color": "green "
                        }}>online</div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="chatroom-card-user">
                      <div className="user-pic-profile">
                        <Image src="https://picsum.photos/40/40" circle />
                      </div>
                      <div className="user-name">username 9</div>
                      <i class="fas fa-phone user-action-call"></i>
                      <div
                        className="user-is-online"
                        style={{
                          "color": "green "
                        }}>online</div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="chatroom-card-user">
                      <div className="user-pic-profile">
                        <Image src="https://picsum.photos/40/40" circle />
                      </div>
                      <div className="user-name">username 10</div>
                      <i class="fas fa-phone user-action-call"></i>
                      <div
                        className="user-is-online"
                        style={{
                          "color": "green "
                        }}>online</div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
                <Panel.Body>Some more panel content here.</Panel.Body>
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                style={{
                  "width": "100%",
                  "display": "flex",
                  "justifyContent": "space-around",
                  "overflow": "scroll"
                }}>
                <div
                  style={{
                    "max-width": "20%"
                  }}>
                  <p>UserName 1</p>
                  <video width="100%" autoPlay>
                    <source
                      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                      type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div
                  style={{
                    "max-width": "20%"
                  }}>
                  <p>UserName 2</p>
                  <video width="100%" autoPlay>
                    <source
                      src=""
                      type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div
                  style={{
                    "max-width": "20%"
                  }}>
                  <p>UserName 3</p>
                  <video width="100%" autoPlay>
                    <source
                      src=""
                      type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div
                  style={{
                    "max-width": "20%"
                  }}>
                  <p>UserName 4</p>
                  <video width="100%" autoPlay>
                    <source
                      src=""
                      type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                </div>
                <div
                  style={{
                    "max-width": "20%"
                  }}>
                  <p>UserName 5</p>
                  <video width="100%" autoPlay>
                    <source
                      src=""
                      type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                </div>
                <div
                  style={{
                    "max-width": "20%"
                  }}>
                  <p>UserName 6</p>
                  <video width="100%" autoPlay>
                    <source
                      src=""
                      type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ChatRoom;
