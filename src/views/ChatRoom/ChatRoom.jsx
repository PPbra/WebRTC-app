import React, { Component } from "react";
import {
  Row,
  Col,
  Grid
} from "react-bootstrap";

import './ChatRoom.css';


import VideoPanel from "./VideoPanel";
import GroupChatList from "./GroupChatList";
import MessageContainer from "./MessageContainer";


class ChatRoom extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpenModal: false
    };
  }

  _handleCloseModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal
    })
  }


  render() {
    const { isOpenModal } = this.state;
    return (
      <div className="content">
        <VideoPanel onCloseModal={this._handleCloseModal} isOpenModal={isOpenModal} />
        <Grid fluid>
          <Row>
            <Col md="9">
              <MessageContainer onCloseModal={this._handleCloseModal} />
            </Col>
            <Col md="3">
              <GroupChatList />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ChatRoom;
