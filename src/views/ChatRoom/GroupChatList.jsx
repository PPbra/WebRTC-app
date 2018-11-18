import React, { Component } from 'react';

import {
    Panel,
    ListGroup,
    ListGroupItem,
    Image,
} from "react-bootstrap";

class GroupChatList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            groups: [
                {
                    name: "Nhom 1",
                    id: 1,
                    status: "calling"
                },
                {
                    name: "Nhom 2",
                    id: 2,
                    status: "offline"
                },
                {
                    name: "Nhom 3",
                    id: 3,
                    status: "calling"
                },
                {
                    name: "Nhom 4",
                    id: 4,
                    status: "offline"
                },
                {
                    name: "Nhom 5",
                    id: 5,
                    status: "offline"
                },
                {
                    name: "Nhom 6",
                    id: 6,
                    status: "calling"
                },
            ]
        }
    }

    _renderGroupList = () => {
        const { groups } = this.state;

        return groups.map(e => {
            return (
                <ListGroupItem>
                    <div className="chatroom-card-user">
                        <div className="user-pic-profile">
                            <Image src="https://picsum.photos/40/40" circle />
                        </div>
                        <div className="user-name">{e.name}</div>
                        <i class="fas fa-plus-circle"></i>
                        <div
                            className="user-is-online"
                            style={{
                                color: (e.status === 'offline') ? 'red' : 'green'
                            }}>{e.status}</div>
                    </div>
                </ListGroupItem>
            )
        })
    }
    render() {
        return (
            <Panel>
                <Panel.Heading>Your Groups</Panel.Heading>
                <ListGroup className="chat-list-users">
                    {this._renderGroupList()}
                </ListGroup>
                <Panel.Body>Create a group by own</Panel.Body>
            </Panel>
        )
    }
}

export default GroupChatList;
